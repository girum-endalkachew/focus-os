const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

try {
  const prismaPkg = require.resolve('prisma/package.json');
  const prismaDir = path.dirname(prismaPkg);
  const pkg = JSON.parse(fs.readFileSync(prismaPkg, 'utf8'));
  const binRel = typeof pkg.bin === 'string' ? pkg.bin : (pkg.bin && pkg.bin.prisma);
  const binPath = path.join(prismaDir, binRel || 'build/index.js');
  console.log('⚡ Running local Prisma CLI at:', binPath);
  execSync(`node "${binPath}" generate`, { stdio: 'inherit' });
} catch (err) {
  console.log('⚡ Fallback: Running npx prisma generate...');
  execSync('npx prisma generate', { stdio: 'inherit' });
}
