// Write your solution in this file!
window.addEventListener("DOMContentLoaded", function(){
    const driver = {};

    function updateDriverWithKeyAndValue(driverObject, key, value) {
     return Object.assign({}, obj, {[key]: value}); 
    }
    
    function destructivelyUpdateDriverWithKeyAndValue(driverObject, key, value) {
        return Object.assign(driver,{[key]: value} );
        //Official solution from learn:
        // driver[key] = value; 
        // return driver;
    }

    function deleteFromDriverByKey() {
        const newObj = Object.assign({}, driver);

        delete newObj[key];
      
        return newObj;
        
    }
    
    function destructivelyDeleteFromDriverByKey(driver, key) {
        delete driver[key];
      
        return driver;
      }
   
});
