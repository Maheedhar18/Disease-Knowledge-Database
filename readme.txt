1. In the githib repository, click on code button and copy the https link.
2. Open your terminal in the destination folder and use the "git clone" command and paste the https link to download the repository.
3. Use "npm install" to install the necessary packages.
4. To connect to your mongodb datbase use the following link-
    mongodb+srv://<username>:<password>@cluster0.bndg37a.mongodb.net/<database>?retryWrites=true&w=majority
    insert your username, password and database name given in mongodb in place of <username>, <password> and <database> respectively.
5. Now paste the links in server.js and in files gene_info, gen_info_scraping, drug_info_scraping, clinical trials files in ipynb folder.
6. To store the general information of any disease run the gen_info_scraping file and enter the disease name to scrap the data from wikipedia. This data is stored as generalinformations in mongodb.
7. Create a diseases collection in mongodb. For every disease you scrap enter the data such as disease_name, summary, related_diseases, scientific_name manually into disease collection. For summary item, use text_summarization on data related to that disease from wikipedia. 
8. In generalinformations the item AffectedOrgan needs to be manually entered after using named entity recognition related to that disease research paper in sci-spacy.ipynb file.
9. Run the gene_info file and enter the disease name to store about the gene information related to that disease.
10. Run the drug_info_scraping to scrap and store about the drugs shown in drugbank website.
11. Run the clinical trials ipynb file to scrap and store about the clinical trials of a certain drug.
12. Finally use the command "npm start" and go to localhost:3000 in your web browser to see the website.