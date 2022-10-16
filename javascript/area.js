areaCounter = 0;


$("#area").click(()=>{ newArea()});



function newArea(){

    let name = prompt('Name the Parking Space');


    a = stage.getPointerPosition()

    var group = new Konva.Group({
        draggable: true,
        pid: 'a'+areaCounter,
        name: 'areaGroup',
        arrayGroup: true
      });

    var area = new Konva.Rect({
        x: a.x,
        y: blur.x,
        width: 40,
        height: 40,
        fill: 'grey',
        opicity: 0.3,
        name: 'area',
        draggable: true,
        pName: name,
        accsible: false,
        staff: false,
        pid: 'a'+areaCounter
      });

      var text = new Konva.Text({
        x: area.attrs.x ,
        y: area.attrs.y,
        height: 20,
        width: 20,
        text: name,
        draggable: true,
        fontSize: 12,
        fontFamily: 'Calibri',
        fill: 'green',
        area: true
      });

      area.on('dblclick', (e)=>{
        if(confirm('Do you really want to delete this shape?'))  
        group.destroy();
    })

    
    group.add(text, area)
    group.add(area)
    layer.add(group);
    
    areaCounter++
}