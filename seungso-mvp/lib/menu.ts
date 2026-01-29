// lib/menu.ts
import fs from "fs";
import path from "path";

export type MenuItem = {
  name: string;
  path: string;
  children?: MenuItem[];
};

function extractPageName(filePath: string): string | null {
  if (!fs.existsSync(filePath)) return null;
  const content = fs.readFileSync(filePath, "utf-8");
  const match = content.match(/export const pageName\s*=\s*["'](.+)["']/);
  return match ? match[1] : null;
}

export function getMenuItems(baseDir = "app"): MenuItem[] {
  const dirPath = path.join(process.cwd(), baseDir);
  if (!fs.existsSync(dirPath)) return [];

  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  const items: MenuItem[] = [];

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    const subDir = path.join(baseDir, entry.name);
    const pageFile = path.join(process.cwd(), subDir, "page.tsx");
    const pageName = extractPageName(pageFile);

    const children = getMenuItems(subDir);

    // pageName이 있는 경우만 포함
    if (pageName) {
      items.push({
        name: pageName,
        path: `/${entry.name}`,
        children: children.length > 0 ? children : undefined,
      });
    } else if (children.length > 0) {
      // 상위에 pageName은 없지만 하위에 유효한 메뉴가 있으면 children만 노출
      items.push(...children);
    }
  }

  return items;
}
