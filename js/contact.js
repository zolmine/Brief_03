function import_data (){
    const modalDisp = document.querySelector('#modal')
  modalDisp.style.display = 'flex'
  document.querySelector('#close').addEventListener('click', () => {
    document.querySelector('#modal').style.display = 'none'
  })
}