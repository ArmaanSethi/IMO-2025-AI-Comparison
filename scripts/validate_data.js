#!/usr/bin/env node
/**
 * Validate data.js has correct structure and all problems load properly.
 * Run with: node scripts/validate_data.js
 */

const fs = require('fs');
const path = require('path');

// Read and parse the data.js file
const dataPath = path.join(__dirname, '..', 'js', 'data.js');
const content = fs.readFileSync(dataPath, 'utf-8');

// Extract the array by evaluating (we'll do a safer approach)
// Remove the export statement and const to get just the array
const arrayStart = content.indexOf('[');
const arrayEnd = content.lastIndexOf(']');
const arrayContent = content.slice(arrayStart, arrayEnd + 1);

let problems;
try {
    problems = JSON.parse(arrayContent);
} catch (e) {
    // Try to eval if JSON parse fails (for JS syntax)
    try {
        problems = eval(arrayContent);
    } catch (e2) {
        console.error('❌ FAILED: Could not parse data.js');
        console.error(e2.message);
        process.exit(1);
    }
}

console.log('✅ data.js parsed successfully\n');

// Validate structure
let errors = 0;
const expectedFields = ['id', 'title', 'content', 'openai', 'gdm'];

for (let i = 0; i < problems.length; i++) {
    const p = problems[i];
    console.log(`Problem ${p.id}: ${p.title}`);

    // Check required fields
    for (const field of expectedFields) {
        if (!(field in p)) {
            console.error(`  ❌ Missing field: ${field}`);
            errors++;
        }
    }

    // Check content is not empty
    if (!p.content || p.content.length < 50) {
        console.error(`  ❌ Content too short or empty`);
        errors++;
    } else {
        console.log(`  ✅ content: ${p.content.length} chars`);
    }

    // Check for garbage/corruption indicators
    const garbagePatterns = [
        /"above\\/,
        /y-axis\.\n/,
        /Step \d\./,
        /\d{2,3}(?=\.\s|\s*Thus)/  // footnote numbers like "95", "101" etc
    ];

    for (const pattern of garbagePatterns) {
        if (pattern.test(p.content)) {
            console.error(`  ⚠️  Warning: content may have garbage text (matched: ${pattern})`);
        }
    }

    // Check openai is present
    if (!p.openai || p.openai.length < 100) {
        console.log(`  ⚠️  openai: short/empty (${p.openai?.length || 0} chars)`);
    } else {
        console.log(`  ✅ openai: ${p.openai.length} chars`);
    }

    // Check gdm is present  
    if (!p.gdm || p.gdm.length < 100) {
        console.log(`  ⚠️  gdm: short/empty (${p.gdm?.length || 0} chars)`);
    } else {
        console.log(`  ✅ gdm: ${p.gdm.length} chars`);
    }

    console.log('');
}

// Final result
if (errors > 0) {
    console.log(`\n❌ Validation FAILED with ${errors} error(s)`);
    process.exit(1);
} else {
    console.log(`\n✅ Validation PASSED - all ${problems.length} problems OK`);
    process.exit(0);
}
