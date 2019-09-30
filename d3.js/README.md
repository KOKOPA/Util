
<div id="line_graph"></div>    

#<script src="./line_graph.js"></script>    
<script>   
    lineGraph.data = [0,1,2];		// 기본값   
    lineGraph.width = 500;		// 기본값   
    lineGraph.height = 300;		// 기본값   
    lineGraph.display();   
</script>    

script 부분은 무조건 #line_graph 밑에서 사용해야한다   
이유 => 위에서 선언하면 line_graph라는 id값을 찾지 못하기 때문   
