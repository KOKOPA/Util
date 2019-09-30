const lineGraph = {
    data : [0, 1, 2],
    width : 500,
    height : 300,
    
    display : () => {
        const data = lineGraph.data;
        const width = lineGraph.width;
        const height = lineGraph.height;

        const max = Math.max.apply(null, data);
        const svg = d3.select('#line_graph')
            .append('svg')
            .attr('width', width)
            .attr('height', height);
    
        const rect = svg.selectAll('rect')
            .data(data)
            .enter()
            .append('rect')
                .attr('y', '90%')
                .attr('x', (d, i) => ((98 / data.length) * i + 2 + '%'))
                .attr('fill', d => {
                    if(d == max) {
                        return 'tomato';
                    }else {
                        return 'steelblue';
                    }
                })
                .attr('width', 80 / data.length + '%')
                .attr('height', 0)
                .transition()
                    .ease(d3.easePoly)
                    .duration(2000)
                    .attr('height', d => ((d / max)) * 90 + '%')
                    .attr('y', d => (90-((d / max)) * 90) + '%');
   
        const text = svg.selectAll('text')
            .data(data)
            .enter()
            .append('text')
                .attr('x', (d, i) => ((98 / data.length) * i + (50 / data.length)+ '%'))
                .attr('y', '97%')
                .attr('text-anchor', 'middle')
                .style('font-family', 'Montserrat')
                .style('font-weight', 'bold')
                .attr('fill', 'rgb(50,50,50)')
                .text(d => (d));
    }
};