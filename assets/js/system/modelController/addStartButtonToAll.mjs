// Script to add startButton functionality to all model controllers
// This script will be run once to update all model controller files

import fs from 'fs';
import path from 'path';

const startButtonCode = `
// Start Button Integration
const startButton = document.getElementById("buttonModalStartMenu_StartButton");
if (startButton) {
    startButton.addEventListener("click", function () {
        console.log("Start button clicked - [PART_NAME]");
        // Wait for dataController to finish, then update model
        setTimeout(() => {
            updateModel_[PART_NAME]();
        }, 100);
    });
}`;

const directories = [
    'modelController_Lower',
    'modelController_Upper', 
    'modelController_Gear'
];

const partNames = {
    'modelController_Lower': [
        'MagazineRelease', 'BufferTube', 'ChargingHandle', 'BoltCatch',
        'EndPlate', 'LowerReceiver', 'Magazine', 'PistolGrip',
        'Safety', 'Stock', 'TakedownPin', 'Trigger', 'TriggerGuard', 'BufferAndSpringKit'
    ],
    'modelController_Upper': [
        'Barel', 'BoltCarrierGroup', 'EjectionPortCover', 'ForwardAssists',
        'Handguard', 'MuzzleDevice', 'UpperReceiver'
    ],
    'modelController_Gear': [
        'Bipod', 'FrontSight', 'RearSight', 'LaserSight', 'Mlok', 'OpticSight'
    ]
};

function addStartButtonToFile(filePath, partName) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Check if startButton already exists
        if (content.includes('buttonModalStartMenu_StartButton')) {
            console.log(`✅ StartButton already exists in ${filePath}`);
            return;
        }
        
        // Find the window exports section
        const windowExportRegex = /window\.[^=]+=.*?;/g;
        const windowExports = content.match(windowExportRegex);
        
        if (windowExports && windowExports.length > 0) {
            // Insert startButton code before window exports
            const lastWindowExport = windowExports[windowExports.length - 1];
            const insertIndex = content.lastIndexOf(lastWindowExport);
            
            const startButtonCodeForPart = startButtonCode
                .replace(/\[PART_NAME\]/g, partName);
            
            content = content.slice(0, insertIndex) + 
                     '\n// Start Button Integration\n' + 
                     startButtonCodeForPart + '\n\n' + 
                     content.slice(insertIndex);
            
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`✅ Added StartButton to ${filePath}`);
        } else {
            console.log(`⚠️  No window exports found in ${filePath}`);
        }
    } catch (error) {
        console.error(`❌ Error processing ${filePath}:`, error.message);
    }
}

// Process all files
directories.forEach(dir => {
    const dirPath = path.join('system/modelController', dir);
    const parts = partNames[dir] || [];
    
    parts.forEach(part => {
        const fileName = `modelController_${part}.mjs`;
        const filePath = path.join(dirPath, fileName);
        
        if (fs.existsSync(filePath)) {
            addStartButtonToFile(filePath, part);
        } else {
            console.log(`⚠️  File not found: ${filePath}`);
        }
    });
});

console.log('🎉 StartButton integration completed!');
