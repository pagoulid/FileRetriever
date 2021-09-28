# FileRetriever
    Returns to webpage  the content of a given file inside specific directory

    Check if file exists or else return 404 with null
    

# Examples
    Test examples:
    
        - localhost:3000/test
        
        - localhost:3000/dir/a/dir
        
        - localhost:3000/dir/a/b/c/d
        
        - localhost:3000/"Your_Directory_name"/"Your_File_name"
        
              Note: Those folders must exist on your local directory
              Note: On second example , first dir is folder , second dir is file inside a subfolder
              
# Bugs

    Check if directory we give is valid (exists)



# Other

    Implementation for production/development:
        - For production mode execute npm start
        - For development mode execute  npm run devtest
        - Must download and decompress node_module
