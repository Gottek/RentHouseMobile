class Home{

    constructor(
        id,
        name,

        description,
        rentCost,
        adress, 

        type,
        fixedChargesCost,
        totalArea,
        imageLink,
        ){
        
        this.id=id;
        this.name=name;

        this.description=description;
        this.rentCost=rentCost;
        this.adress=adress;
        this.type=type;
        this.fixedChargesCost=fixedChargesCost;
        this.totalArea=totalArea;
        this.imageLink=imageLink;
    }
}
export default Home;