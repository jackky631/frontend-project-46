export default (data) => {
	const formatted = data.map((item)=>{
		if(item.status === 'secondFile'){
			return ` + ${item.key}: ${item.value}`
		}
		if(item.status === 'firstFile'){
			return ` - ${item.key}: ${item.value}`
		}
		if(item.status === 'diffValues'){
			return ` - ${item.key}: ${item.oldValue}\n + ${item.key}: ${item.newValue}`
		}
		if(item.status === 'sameValues'){
			return `   ${item.key}: ${item.value}`
		}
	})
	return `\n${formatted.join('\n')}\n`
}