const getNotes = require('./notes.js');
const validator= require('validator');
const yargs = require('yargs');
console.log(validator.isEmail('spandey@gmail.com'))
console.log(validator.isURL('https://abc.com'))

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title:{
     describe:'note title',
     demandOption:true,
     type:'string'
        }
    },
    handler: function (argv) {
        console.log('Adding a new note!',argv)
    }
})
yargs.command({
command: 'remove',
describe: 'removing a note',
handler: function()
{
    console.log('update note');
}

})

yargs.command({
    command: 'list',
    describe: 'list a note',
    handler: function()
    {
        console.log('listing all note');
    }
    
    })

    yargs.command({
        command: 'read',
        describe: 'read  note',
        handler: function()
        {
            console.log('reading note');
        }
        
        })
console.log(yargs.argv);