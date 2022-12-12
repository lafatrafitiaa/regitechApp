//export to format Pdf
function exportToPDF(titre, id, nomFichier) {
    var doc = new jsPDF('p', 'pt', 'letter');
    var htmlstring = '';
    var tempVarToCheckPageHeight = 0;
    var pageHeight = 0;
    pageHeight = doc.internal.pageSize.height;
    specialElementHandlers = {
        // element with id of "bypass" - jQuery style selector  
        '#bypassme': function(element, renderer) {
            // true = "handled elsewhere, bypass text extraction"  
            return true
        }
    };
    margins = {
        top: 150,
        bottom: 60,
        left: 20,
        right: 20,
        width: 600
    };
    var y = 20;
    doc.setLineWidth(2);
    doc.text(200, y = y + 30, titre);
    doc.autoTable({
        html: '#' + id,
        startY: 70,
        theme: 'grid',
        styles: {
            minCellHeight: 20
        },
        headStyles: { fillColor: [124, 95, 240] },
        alternateRowStyles: { fillColor: [231, 215, 252] },
        tableLineColor: [124, 95, 240]
    });

    doc.save(nomFichier + '.pdf');

}

function exportHtmlToPDF(id, filename) {
    var doc = new jsPDF();
    var elementHTML = document.getElementById(id).innerHTML;
    // var specialElementHandlers = {
    //     '#elementH': function (element, renderer) {
    //         return true;
    //     }
    // };
    doc.fromHTML(elementHTML, 15, 15, {
        'width': 170
            // ,'elementHandlers': specialElementHandlers
    });

    // Save the PDF
    doc.save(filename + '.pdf');
}

function getImgFromUrl(logo_url, callback) {
    var img = new Image();
    img.src = logo_url;
    img.onload = function() {
        callback(img);
    };
}

// export to format csv
function exportToCSV(id, filename) {
    var csv = [];
    var rows = document.querySelectorAll("#" + id + " tr");
    for (var i = 0; i < rows.length; i++) {
        var row = [],
            cols = rows[i].querySelectorAll("#" + id + " td, th");
        for (var j = 0; j < cols.length; j++)
            row.push(cols[j].innerText);

        csv.push(row.join(","));
    }
    // Download CSV file
    downloadCSV(csv.join("\n"), filename + ".csv");
}

function downloadCSV(csv, filename) {
    var csvFile;
    var downloadLink;
    // CSV file
    csvFile = new Blob([csv], { type: "text/csv" });
    // Download link
    downloadLink = document.createElement("a");
    // File name
    downloadLink.download = filename;
    // Create a link to the file
    downloadLink.href = window.URL.createObjectURL(csvFile);
    // Hide download link
    downloadLink.style.display = "none";
    // Add the link to DOM
    document.body.appendChild(downloadLink);
    // Click download link
    downloadLink.click();
}


// export to format excel xls
function exportToExcel(tableID, filename = '') {
    var downloadLink;
    var dataType = 'application/vnd.ms-excel';
    var tableSelect = document.getElementById(tableID);
    var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');

    // Specify file name
    filename = filename ? filename + '.xlsx' : 'excel_data.xlsx';

    // Create download link element
    downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);

    if (navigator.msSaveOrOpenBlob) {
        var blob = new Blob(['\ufeff', tableHTML], {
            type: dataType
        });
        navigator.msSaveOrOpenBlob(blob, filename);
    } else {
        // Create a link to the file
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;

        // Setting the file name
        downloadLink.download = filename;

        //triggering the function
        downloadLink.click();
    }
}

var tableToExcel = (function() {
    var uri = 'data:application/vnd.ms-excel;base64,',
        template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--><meta http-equiv="content-type" content="text/plain; charset=UTF-8"/></head><body><table>{table}</table></body></html>',
        base64 = function(s) { return window.btoa(unescape(encodeURIComponent(s))) },
        format = function(s, c) { return s.replace(/{(\w+)}/g, function(m, p) { return c[p]; }) }
    return function(table, name) {
        var downloadLink = document.createElement("a");
        document.body.appendChild(downloadLink);
        if (!table.nodeType) table = document.getElementById(table);
        var ctx = { worksheet: name || 'Worksheet', table: table.innerHTML };
        downloadLink.href = uri + base64(format(template, ctx));
        downloadLink.download = name + ".xlsx";
        downloadLink.click();
    }
})();