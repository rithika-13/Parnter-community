module.exports=srv=>{
    console.log('heck')
    srv.after('READ','ques',xs=>{
        console.log(xs)
        return xs
    })
   
        // Event handler for DELETE operation on the 'Books' entity
        srv.on('DELETE', 'ques', async (req) => {
            try {
              
                const { ID } = req.data;
                console.log(`Deleting book with ID: ${ID}`);
    
                   return { ID };
            } catch (error) {
                console.error('Error deleting book:', error);
                return srv.error(500, 'Failed to delete book');
            }
        })
        let lastID = 0;

        srv.on('POST', 'ques', async (req) => {
            const newData = req.data;
        
            // Increment lastID to generate a new unique ID
            lastID++;
            newData.ID = lastID;
        
            // Log the new data with the generated ID
            console.log('New data created:', newData);
        
            // Save the new entity to the database
            // (Assuming there is code here to save the entity)
        });
        
        srv.on('POST', 'ques', async (req) => {
            const newData = req.data;
            console.log('New data created:', newData);
        });
}