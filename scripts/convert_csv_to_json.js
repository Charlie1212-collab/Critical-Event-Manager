const fs = require('fs');
const path = require('path');
const csv = require('csvtojson');

async function convertCsvToJson() {
    try {
        console.log('Reading CSV file...');
        const csvFilePath = path.join(__dirname, '..', 'walgreens_youtube.csv');
        const jsonOutputPath = path.join(__dirname, '..', 'public', 'social_media_results.json');

        const jsonArray = await csv().fromFile(csvFilePath);

        // Add platform field to each entry
        const formattedData = jsonArray.map(item => ({
            ...item,
            platform: 'YouTube',
        }));

        // Write JSON to file
        fs.writeFileSync(jsonOutputPath, JSON.stringify(formattedData, null, 2));
        console.log(`Successfully converted CSV to JSON and saved to ${jsonOutputPath}`);
    } catch (error) {
        console.error('Error converting CSV to JSON:', error);
    }
}

convertCsvToJson();