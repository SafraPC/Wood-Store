//JS File for register functions and masks
let cpf = document.getElementById('cpf');
let dataNasc = document.getElementById('dataNasc');


//   cpf.onkeypress = (e) =>{
//   console.log(e.key);
// }

//ARRUMAR AQUI DEPOIS
   cpf.addEventListener('input', (e)=> {
        var x = e.target.value.replace(/\D/g, '').match(/(\d{3})(\d{3})(\d{3})(\d{2})/);
        e.target.value = (x[1] + '.' + x[2] + '.' + x[3] + '-' + x[4]);
      });
      dataNasc.addEventListener('input', (e)=> {
        var x = e.target.value.replace(/\D/g, '').match(/(\d{2})(\d{2})(\d{4})/);
        e.target.value = (x[1] + '/' + x[2] + '/'+x[3] );
      });
