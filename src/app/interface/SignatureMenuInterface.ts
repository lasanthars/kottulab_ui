export class SignatureMenuInterface {
    setmenu: {id: string, name: string, description: string, price: Number};
    ingredients: [{id: string, name: string, type: Number, price: Number}];
    portions: [{id: string, displayName: string, name: string, price: Number, setmenu_type: Number}];
}
