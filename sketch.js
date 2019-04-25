
			$(document).ready(function() {
				var width = $(window).width();
				var height = $(window).height();
				var eighty = width/100 * 80;
				eighty = Math.floor(eighty);
				$('.image').css("width", eighty);
				$('#value').html(eighty);
				
				var image_width = eighty;
				var change = 10;
				$('#change').html(change);
				var temp = 0;

				// ---------- Image Control ----------- //
				
				$('#image_dec').click(function() {
					temp = image_width - change;
					if(temp > 0) {
						$('.image').css("width", temp);
						image_width = temp;
					}
					
					$('#value').html(image_width);
				});

				$('#image_inc').click(function() {
					temp = image_width + change;
					if(temp < eighty) {
						$('.image').css("width", temp);
						image_width = temp;
					}
					
					$('#value').html(image_width);
				});
				
				$('#change_inc').click(function() {
					temp = change + 1;
					if(temp < eighty) {
						change++;
						$('#change').html(change);
					}
				});
				$('#change_dec').click(function() {
					temp = change - 1;
					if(temp) {
						change--;
						$('#change').html(change);
					}
				});

				// -------------- Grid Size Control --------------- //

				var td_width = 50
				var td_change = 10;

				$('#size_change').html(td_change);

				$('#size_dec').click(function() {
					temp = td_width - td_change;
					if(temp > 0) {
						$('td').css("width", temp);
						$('td').css("height", temp);
						td_width = temp;
					}
					
				});
				
				$('#size_inc').click(function() {
					temp = td_width + td_change;
					if(temp < eighty) {
						$('td').css("width", temp);
						$('td').css("height", temp);
						td_width = temp;
					}
					
				});
				
				$('#size_change_inc').click(function() {
					temp = td_change + 1;
					if(temp < eighty) {
						td_change++;
						$('#size_change').html(td_change);
					}
				});
				$('#size_change_dec').click(function() {
					temp = td_change - 1;
					if(temp) {
						td_change--;
						$('#size_change').html(td_change);
					}
				});
				// -- Grid Number Control -- //

				var grid_number_stat = 1;

				$('#grid_number').click(function() {
					if(grid_number_stat) {
						$('td').children('span').css('display', 'none');
						$('#grid_number').html("Show");
						grid_number_stat = 0;
					}
					else {
						$('td').children('span').css('display', 'block');
						$('#grid_number').html("Hide");
						grid_number_stat = 1;
					}
				});

				//---------- Grid Control -------------- //

				var tr = 3;
				var td = 1;

				$('#row_inc').click(function() {
					tr++;
					$('.grid').append('<tr id="tr_'+tr+'"></tr>');
					var temp = 1;
					var dis = 'none';
					if(grid_number_stat) dis = 'block';
					while(temp<=td) {
						if(temp>1) 
							$('#tr_'+tr).append('<td class="td_'+temp+'" style="width: '+td_width+'px; height: '+td_width+'px";></td>');
						else
							$('#tr_'+tr).append('<td class="td_'+temp+'" style="width: '+td_width+'px; height: '+td_width+'px";><span style="display: '+dis+';">'+tr+'</span></td>');
						temp++;
					}
				});


				$('#row_dec').click(function() {
					temp = tr - 1;
					if(temp) {
						$('#tr_'+tr).remove();
						tr--;
					}
				});

				$('#col_inc').click(function() {
					td++;
					var temp_tr = 1;
					var dis = 'none';
					if(grid_number_stat) dis = 'block';
					while(temp_tr <= tr) {
						if(temp_tr > 1)
							$('#tr_'+temp_tr).append('<td class="td_'+td+'" style="width: '+td_width+'px; height: '+td_width+'px"></td>');
						else 
							$('#tr_'+temp_tr).append('<td class="td_'+td+'" style="width: '+td_width+'px; height: '+td_width+'px"><span style="display: '+dis+';">'+td+'</span></td>');
						temp_tr++;
					}
				});

				$('#col_dec').click(function() {
					temp = td - 1;
					if(temp) {
						$('.td_'+td).remove();
						td--;
					}
				});
			});
			
