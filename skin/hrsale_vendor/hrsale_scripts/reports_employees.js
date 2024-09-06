$(document).ready(function() {
   var xin_table = $('#xin_table').dataTable({
        "bDestroy": true,
		"ajax": {
            url : site_url+"reports/report_employees_list/0/0/0/",
            type : 'GET'
        },
		columnDefs: [
					{ visible: false, targets: 2 },
					{ visible: false, targets: 8 },
					{visible: false, targets: 9 },
					{visible: false, targets: 10 },
					{visible: false, targets: 11 },
					{visible: false, targets: 12 },
					{visible: false, targets: 13 },
					{visible: false, targets: 14 },
					{visible: false, targets: 15 },
					{visible: false, targets: 16 },
					{visible: false, targets: 17 },
					{visible: false, targets: 18 },
					{visible: false, targets: 19 },
					{visible: false, targets: 20 },
					{visible: false, targets: 21 },
					{visible: false, targets: 22 },
					{visible: false, targets: 23 }
		],
	// 	columnDefs: [
    //     {
    //         target: 6,
    //         visible: false,
    //         searchable: false
    //     },
	// 	{
	// 		target: 7,
    //         visible: false,
    //         searchable: false
	// 	}
	// ],
		// dom: 'lBfrtip',
		// "buttons": ['csv', 'excel', 'pdf', 'print','colvis'], // colvis > if needed
		// Menampilkan permintaan jumlah kolom
		"language": {
				"oPaginate": {
					"sFirst": "First",
					"sPrevious": "Previous",
					"sNext": "Next",
					"sLast": "Last"
					}
				},
		layout: {
				topStart: {
					buttons: [ 'pageLength',
								{
							extend: 'collection',
							text: 'Export',
							buttons: ['excel'
								,
								{
									extend : 'print',
									exportOptions : {
										columns : [0, 1, 2, 3, 4, 5, 6, 7]
									}
								},
								{
									extend : 'pdf',
									orientation : 'landscape',
									pageSize : 'A4',
									exportOptions : {
										columns : [0, 1, 2, 3, 4, 5, 6, 7]
									}
								}
							]
						}
						// {
						// text: 'Atur Kolom',
						// extend: 'colvis',
						// },
						// {
						// text: 'Ekspor ke Excel',
						// extend: 'excel',
						// exportOptions: {
						// 	columns: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
						// 	//Penambahan cetak excel contoh [,16,17]
						// }
						// },
					]
				},
				bottomEnd: {
						paging: {
							type: 'simple_numbers'
						}
				}
			},
		"fnDrawCallback": function(settings){
		$('[data-toggle="tooltip"]').tooltip();          
		}
    });
	
	$('[data-plugin="select_hrm"]').select2($(this).attr('data-options'));
	$('[data-plugin="select_hrm"]').select2({ width:'100%' });
	// get departments
	jQuery("#aj_company").change(function(){
		var c_id = jQuery(this).val();
		jQuery.get(base_url+"/get_departments/"+c_id, function(data, status){
			jQuery('#department_ajax').html(data);			
		});
		/*if(c_id == 0){
			jQuery.get(base_url+"/designation/"+jQuery(this).val(), function(data, status){
				jQuery('#designation_ajax').html(data);
			});
		}*/
	});
		
	/* projects report */
	$("#employee_reports").submit(function(e){
		/*Form Submit*/
		e.preventDefault();
		var company_id = $('#aj_company').val();
		var department_id = $('#aj_department').val();
		var designation_id = $('#designation_id').val();
		var xin_table2 = $('#xin_table').dataTable({
			"bDestroy": true,
			"ajax": {
				url : site_url+"reports/report_employees_list/"+company_id+"/"+department_id+"/"+designation_id+"/",
				type : 'GET'
			},
			columnDefs: [{ visible: false, targets: 2 },
		 				{ visible: false, targets: 8 },
						{visible: false, targets: 9 },
						{visible: false, targets: 10 },
						{visible: false, targets: 11 },
						{visible: false, targets: 12 },
						{visible: false, targets: 13 },
						{visible: false, targets: 14 },
						{visible: false, targets: 15 },
						{visible: false, targets: 16 },
						{visible: false, targets: 17 },
						{visible: false, targets: 18 },
						{visible: false, targets: 19 },
						{visible: false, targets: 20 },
						{visible: false, targets: 21 },
						{visible: false, targets: 22 },
						{visible: false, targets: 23 }
			],
			// dom: 'lBfrtip',
			// "buttons": ['csv', 'excel', 'pdf', 'print','colvis'], // colvis > if needed
			// Menampilkan permintaan jumlah kolom
			"language": {
				"oPaginate": {
					"sFirst": "First",
					"sPrevious": "Previous",
					"sNext": "Next",
					"sLast": "Last"
					}
				},
				layout: {
				topStart: {
					buttons: [ 'pageLength',
								{
							extend: 'collection',
							text: 'Export',
							buttons: ['excel'
								,
								{
									extend : 'print',
									exportOptions : {
										columns : [0, 1, 2, 3, 4, 5, 6, 7]
									}
								},
								{
									extend : 'pdf',
									orientation : 'landscape',
									pageSize : 'A4',
									exportOptions : {
										columns : [0, 1, 2, 3, 4, 5, 6, 7]
									}
								}
							]
						}
						// {
						// text: 'Atur Kolom',
						// extend: 'colvis',
						// },
						// {
						// text: 'Ekspor ke Excel',
						// extend: 'excel',
						// exportOptions: {
						// 	columns: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
						// 	//Penambahan cetak excel contoh [,16,17]
						// }
						// },
					]
				},
				bottomEnd: {
						paging: {
							type: 'simple_numbers'
						}
				}
			},
			"fnDrawCallback": function(settings){
			$('[data-toggle="tooltip"]').tooltip();          
			}
		});
		toastr.success('Request Submit.');
		xin_table2.api().ajax.reload(function(){ Ladda.stopAll(); }, true);
	});
});