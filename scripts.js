gapi.load('client', initClient);

function initClient() {
  gapi.client.init({
    apiKey: 'YOUR_API_KEY',
    discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
  }).then(function () {
    loadSheetData();
  }).catch(function(error) {
    console.error('Error initializing Google Sheets API client', error);
  });
}

function loadSheetData() {
  gapi.client.sheets.spreadsheets.values.get({
    spreadsheetId: 'YOUR_SPREADSHEET_ID',
    range: 'Trang tính1' // Change to your sheet name
  }).then(function (response) {
    var values = response.result.values;
    displaySheetData(values);
  }).catch(function(error) {
    console.error('Error loading sheet data', error);
  });
}

function displaySheetData(data) {
  var sheetDataElement = document.getElementById('sheetData');

  if (data && data.length > 0) {
    var table = '<table>';
    
    // Add a header row with background color
    table += '<tr>';
    for (var i = 0; i < data[0].length; i++) {
      table += '<th>' + data[0][i] + '</th>';
    }
    table += '</tr>';

    // Add data rows with background color coding
    for (var i = 1; i < data.length; i++) {
      table += '<tr>';
      for (var j = 0; j < data[i].length; j++) {
        var cellValue = data[i][j];
        var cellClass = '';

        // Apply background color coding based on cell value
        if (cellValue === 'N') {
          cellClass = 'grey-bg';
        } else if (cellValue === 'D') {
          cellClass = 'lightly-blue-bg';
        } else if (cellValue === 'OFF') {
          cellClass = 'red-bg';
        }

        table += '<td class="' + cellClass + '">' + cellValue + '</td>';
      }
      table += '</tr>';
    }
    
    table += '</table>';
    
    sheetDataElement.innerHTML = table;
  } else {
    sheetDataElement.innerHTML = 'No data available';
  }
}

