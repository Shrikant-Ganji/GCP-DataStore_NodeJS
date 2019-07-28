# NodeJs_GCP_PoC

# Using NodeJS API calls to get the customer deatials in GCP Datastore
Create Kind(customer) & entity's(customerName=Shrikant,customerAge=24, customerEmailId=shrikant@gmail.com, customerPhoneNo=3265897410) in GCP Datastore Get the customers details by using /getCustomers Get the single customer by using Id like /getCustomerById?id=101 Post the Customer by using /addNewCustomer ---> #for addNewCustomer Post the details inside the "BODY" { "customerName": "Ganji", "customerEmail": "ganji@gmail.com", "customerAge": "24", "customerCity": "Hyd" }

# Welcome Page For GCP PoC

https://newpoc.appspot.com/

# Sample output for /getCustomers

https://newpoc.appspot.com/getCustomers

[{"_id":"5634161670881280","customerEmail":"hello@gmail.com","customerAge":24,"customerName":"Hello","customerPhoneNo":9876543210},{"_id":"5636645067948032","customerEmail":"pradeep@gmail.com","customerAge":24,"customerName":"pradeep","customerPhoneNo":1436329870},{"_id":"5642368648740864","customerName":"kanth","customerPhoneNo":1456329870,"customerEmail":"kanth@gmail.com","customerAge":24}]

# Sample output for /getCustomerById?id=5634161670881280

https://newpoc.appspot.com/getCustomerById?id=5634161670881280

{"_id":"5634161670881280","customerEmail":"hello@gmail.com","customerAge":24,"customerName":"Hello","customerPhoneNo":9876543210}

# Sample input for /addNewCustomer in Body

https://newpoc.appspot.com/addNewCustomer

{ "customerEmail":"ganji@gmail.com","customerAge":25,"customerName":"Ganji","customerPhoneNo":6547893210" }

Thanks....
