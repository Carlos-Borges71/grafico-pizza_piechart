function desenharGraficoPizza(){

	const tabela = new google.visualization.DataTable();
	const dinh = 1814.01;
	const pix = 2242.24;
	const cred = 2543.09;
	const deb = 3504.25;

	const soma = dinh + pix + cred + deb;

	// transformando numero em moeda
	const somatotal = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
		soma);

	tabela.addColumn('string','categorias');
	tabela.addColumn('number', 'valores');

		tabela.addRows([
			['Dinheiro', dinh],
			['Pix', pix],
			['Cartão de crédito', cred],
			['Cartão de débito', deb],
			
		]);	

		tabela.sort({column: 1, asc: true});

		const opcoes = {
			title:`Vendas Mensal Total de ${somatotal}`,
			height: 400,
			width: 700,
			legend: 
				{
					position: 'labeled', 
					textStyle: 
						{
							color: '#928e8a', 
							fontSize: 16
						}
				},
			pieSliceText: 'value',
			slices: 
				{
					0:{color:'red'},
					1:{color:'blue'},
					2:{color:'orange'},
					3:{color:'#a6a6a6', offset: 0.05},
					
				},
			pieStartAngle: 4,
			titleTextStyle: 
				{ 
					color: '#5e5851',
					fontName: 'Arial',
					fontSize: 30,
					bold: true,
					italic: false 
				},
			chartArea:
				{
					left: 80,
					top: 100,
					width:'90%',
					height:'70%'
				}

				
			};
	
	const grafico = new google.visualization.PieChart(document.getElementById('graficoPizza'));
            grafico.draw(tabela, opcoes);
    
}


