
export function paginationhelper(datapages: any, page:any) {
let pages:Array<any> = [];
for(let i = page; i <= datapages; i++){
pages.push(i);
if(pages.length > 4){
return pages
}
}
return pages

}