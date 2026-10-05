require('dotenv').config();
const { crateClient } = require('@supabase/supabase.js');

//variaveis de ambiente do arquivo .env
const supabaseUrl = process.env.SUPABASE_URL;
const supabasekey = process.env.SUPABASE_KEY;

//Alerta visual 
if(!supabaseUrl || !supaKey || supabaseUrl.includes('seu-projeto')){
    console.log('\n Atenção: não configurado .env');
    console.log('Abra o arquivo backend/ .env \n')
}
const supabase = crateClient(supabaseUrl || '', supabaseKey || '');
module.exports = supabase;