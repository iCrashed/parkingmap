areaCounter = 0;


$("#parking").click(()=>{ newParking()});


pCounter = 0;
var parkings = Array();

function newParking(){

    //let name = prompt('Name the Parking Space');
    
    let name = '';
    check = false
    while(!check){
      k = prompt('Name the Parking Space')
      if(parkings.includes(k)){
        alert(k + " parking slot already added!!!")
      }else {
        name = k;
        check = true;
        break
      }
      
    }
    if(!check) return false;

    // set some initial dimensions
  x = 20, 
  y = 80,
    
  // Make a group into which we will add the rect & text     
  group1 = new Konva.Group({draggable: true}), 

  // Make a simple rectangle node      
  rect1 = new Konva.Rect({
    name: "r1",
    x: x,
    y: y,
    width: 120,
    height: 80,
    fill: "magenta",
    name: "rect",
    pName: name,
    pId: 'p'+pCounter
  }),

  // Make a text node  
  txt1 = new Konva.Text({
    x: x,
    y: y,
    text: name,
    fontSize: 20,
    fontFamily: "Calibri",
    fill: "white",
    name: "text",
    verticalAlign: 'middle'
  }),
    
  // set up the transformer
  tr1 = new Konva.Transformer({
    name: 'ptransformer',
    pid: 'p'+pCounter
  });

// Now compose the shapes onto the canvas and connect them as needed

// Add the layer to the stage and shapes to layer
stage.add(layer);
layer.add(group1, tr1);
parkings.push(rect1.getAttr('pName'))

rect1.on('click',(e)=>{
  if(confirm("Are you sure you want to delete this parking slot")){
    parkings.pop(rect1.getAttr('pName'))
    group1.destroy();
  } 
})

// add shapes into the group - you can do these individually too
group1.add(rect1, txt1);

// Finally connect the transformer to the group
tr1.nodes([group1]);

// Set the group x-scale to mimic a horizontal stretch by the user 
group1.scaleX(2)

stage.draw();
}




function parkingOff(){
  allTraans = stage.find(".ptransformer");

  allTraans.forEach(function (shape) {
    shape.setAttr('visible', false);
  })

}