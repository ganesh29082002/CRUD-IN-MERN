export const filterData = (users,searchQuery) =>{
    console.log(users , searchQuery)
   return  users?.filter(user => user?.productName.toLowerCase().includes(searchQuery?.toLowerCase()));
}