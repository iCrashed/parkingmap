lineCounter = 0;



$("#line").click(()=>{ newLine()});



function newLine(){
    var line = new Konva.Rect({
        x: 20,
        y: 20,
        width: 20,
        height: 20,
        fill: 'red',
        name: 'rect',
        draggable: true,
        pid: 'l'+lineCounter
      });

    line.on('dblclick', (e)=>{
        if(confirm('Do you really want to delete this shape?'))  line.destroy();
    })

    layer.add(line);
    
    lineCounter++
}