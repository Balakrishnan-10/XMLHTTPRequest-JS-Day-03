# Javascript Day 03 Task:

## Compare two JSON have the same properties without order:
   * Defines two objects with the same properties without order.
   * Using Stringify and Object.key method.
   * Using For loop.
   * Using Conditional Statement.
   * If the value of a property in str1 is match the value of the corresponding property in str2, the objects are same.
   * Finally the Output is
     
   ![01](https://github.com/Balakrishnan-10/XMLHTTPRequest-JS-Day-03/assets/157093363/a6f921e7-4283-4bb5-b85a-b364a3780fef)
   
   ![02](https://github.com/Balakrishnan-10/XMLHTTPRequest-JS-Day-03/assets/157093363/11a0d7a4-97a4-41fc-b261-48a9f9b335b0)

## XMLHTTP Request Method:Rest Countries.
### Console the Rest Countries Details of Country_Name,Region,Sub_region,Population,Flags.
* **Step-1:**
     
     * Create a XHR Object
    * XHR => xmlhttprequest
    * **Syntax:**
        * var/let/const variable name = new XMLHttoRequest();
        * Variablename = userdefined.(proper name)
        * new = new is a keyword used to create a object.

* **Step-2:**
      
    * Opening a connection to server.
    * Three parameters are there to open a connection to server.
         * HTTP Method(GET,POST,PUT,DELETE)
         * URL (From where to get Data)
         * True/False (Optional)
    * **Syntax:**
         * variablename.open("HTTP Method", "URL", "Boolean")

* **Step-3:**
      
     
     * Iniating the bridge to server / sending request
      * **Syntax:**
         * variablename.send();
         * Send:- It is a method used to send the request.

 * **Step-4:** 

      * Server Response       
      * Event:
         * Onload :- It is an event.
      * Function (Anonymous function):
      * **Syntax:**
         * function(){

         }
     
