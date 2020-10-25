import veg from '../../assets/veg.jpg';
import nonveg from '../../assets/nonveg.jpg';
import vegan from '../../assets/vegan.jpg';



const MenuData = [
 { 
     id : 1,
     title :'Select Your Preference',
     items:[
             {
                id: 1,
                name : 'Non Vegetarian',
                imageUrl : nonveg
                

            },
                {
                id : 2,
                name : 'Vegetarian',
                imageUrl : veg
                

            },
            {
                id : 3,
                name : 'Vegan',
                imageUrl : vegan

            }
        ]
    },
    {
        id :2,
        title : 'kerala cusins',
        items :[
            {
                id: 1,
                name : 'Non Vegetarian',
                imageUrl : nonveg
                

            },
                {
                id : 2,
                name : 'Vegetarian',
                imageUrl : veg
                

            },
            {
                id : 3,
                name : 'Vegan',
                imageUrl : vegan

            }

        ]
    }

];

export default MenuData;