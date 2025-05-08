//your JS code here. If required.
document.getElementById("btn").addEventListener('click', async ()=>{
	let data =document.getElementById("text").value
	let delay=document.getElementById("delay").value
	let fetcheddata=await resolvepromise(data,delay)
	document.getElementById("output").innerText=fetcheddata
})

function resolvepromise(data,delay) {
	return new Promise((resolve)=>{
		setTimeout(()=>resolve( data),delay)
	});
	
}








