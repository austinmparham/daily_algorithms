function coupleSum(arr,k){
	var dict = {}
	for(var i =0; i < arr.length; i++){
		if(dict[k-arr[i]] == null){
			dict[arr[i]] = 0;
		}
		else{
			return true;
		}
	}
	return false;
}
coupleSum([10,15,3,7],17)