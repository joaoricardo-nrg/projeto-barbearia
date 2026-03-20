 const form = document.getElementById('form-contato');                                                                                                                                      
                                                                                                                                                                                             
  form.addEventListener('submit', function(e) {                                                                                                                                              
    e.preventDefault();                                                                                                                                                                      
                                                                                                                                                                                             
    const nome     = document.getElementById('nome').value;                                                                                                                                  
    const telefone = document.getElementById('telefone').value;                                                                                                                              
    const servico  = document.getElementById('servico').value;                                                                                                                               
                                                            
    const mensagem = `Olá! Meu nome é ${nome}, meu WhatsApp é ${telefone} e gostaria de agendar: ${servico}.`;                                                                               
                                                            
    const numeroWhatsApp = '5511999999999'; // substitui pelo número do cliente                                                                                                              
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
                                                                                                                                                                                             
    window.open(url, '_blank');                             
  });                                    