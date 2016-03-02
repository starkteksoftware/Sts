/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

self.addEventListener('message',function(e){
    self.postMessage(" i am here");
    alert(e.data);
},false);



