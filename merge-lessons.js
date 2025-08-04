const fs = require('fs');
const path = require('path');

// 配置
const lessonsDir = './lessons';
const outputFile = 'merged-lessons.md';

// 获取所有 markdown 文件并按文件名排序
function getLessonFiles() {
    try {
        const files = fs.readdirSync(lessonsDir)
            .filter(file => file.endsWith('.md'))
            .sort(); // 按文件名排序，确保按数字顺序
        
        return files;
    } catch (error) {
        console.error('读取 lessons 目录失败:', error.message);
        process.exit(1);
    }
}

// 读取文件内容
function readFileContent(filePath) {
    try {
        return fs.readFileSync(filePath, 'utf8');
    } catch (error) {
        console.error(`读取文件 ${filePath} 失败:`, error.message);
        return '';
    }
}

// 合并所有课程文件
function mergeLessons() {
    const files = getLessonFiles();
    
    if (files.length === 0) {
        console.log('未找到任何 markdown 文件');
        return;
    }
    
    console.log(`找到 ${files.length} 个课程文件:`);
    files.forEach(file => console.log(`  - ${file}`));
    
    let mergedContent = '';
    
    // 添加标题和目录
    mergedContent += '# AI 辅助开发指南\n\n';
    mergedContent += '> 本文档由多个课程文件合并而成\n\n';
    mergedContent += '## 目录\n\n';
    
    // 生成目录
    files.forEach((file, index) => {
        const lessonNumber = index + 1;
        const title = file.replace(/^\d+-/, '').replace('.md', '').replace(/-/g, ' ');
        mergedContent += `${lessonNumber}. [${title}](#lesson-${lessonNumber})\n`;
    });
    
    mergedContent += '\n---\n\n';
    
    // 合并每个文件的内容
    files.forEach((file, index) => {
        const filePath = path.join(lessonsDir, file);
        const content = readFileContent(filePath);
        
        if (content) {
            const lessonNumber = index + 1;
            const title = file.replace(/^\d+-/, '').replace('.md', '').replace(/-/g, ' ');
            
            // 添加课程标题
            mergedContent += `## Lesson ${lessonNumber}: ${title} {#lesson-${lessonNumber}}\n\n`;
            
            // 添加原文件名信息
            mergedContent += `> 原文件: ${file}\n\n`;
            
            // 处理内容中的标题层级（将所有 # 增加一级）
            const processedContent = content
                .split('\n')
                .map(line => {
                    if (line.startsWith('#')) {
                        return '#' + line; // 增加一级标题
                    }
                    return line;
                })
                .join('\n');
            
            mergedContent += processedContent;
            mergedContent += '\n\n---\n\n';
            
            console.log(`✓ 已合并: ${file}`);
        }
    });
    
    // 写入合并后的文件
    try {
        fs.writeFileSync(outputFile, mergedContent, 'utf8');
        console.log(`\n✅ 合并完成！输出文件: ${outputFile}`);
        console.log(`📄 总共合并了 ${files.length} 个文件`);
        
        // 显示文件大小信息
        const stats = fs.statSync(outputFile);
        console.log(`📊 输出文件大小: ${(stats.size / 1024).toFixed(2)} KB`);
        
    } catch (error) {
        console.error('写入合并文件失败:', error.message);
        process.exit(1);
    }
}

// 主函数
function main() {
    console.log('🚀 开始合并 lessons 目录下的文件...\n');
    
    // 检查 lessons 目录是否存在
    if (!fs.existsSync(lessonsDir)) {
        console.error(`错误: ${lessonsDir} 目录不存在`);
        process.exit(1);
    }
    
    mergeLessons();
}

// 运行脚本
if (require.main === module) {
    main();
}

module.exports = { mergeLessons, getLessonFiles };
