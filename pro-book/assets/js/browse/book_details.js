
var browse_tab = document.getElementById("browse_tab");
browse_tab.className = "header_app_content orange-background hover_lightOrange";

function orderBook(user_id, book_id) {
  const jumlah = document.getElementById('total-order').value
  let sender_cardnumber;

  // Ambil nomor kartu si pemesan
  fetch(`http://localhost:3000/customers/${username}`)
    .then(res => res.json())
    .then(res => {
        console.log(res)
        sender_cardnumber = res.card_number;
    })
    .catch(err => console.log(err))

  // Lakukan transaksi, kirim sejumlah uang dari pemesan ke admin. Disimpan di database webservice bank
  fetch("http://localhost:3000/transactions", {
    method: 'post',
    headers: new Headers({'content-type': 'application/json'}),
    body: JSON.stringify({
      sender_cardnumber,
      receiver_cardnumber: 1356,
      amount: 5000,
    })
  })
    .then(res => console.log(res))
    .catch(err => console.log(err))

  // Tambahkan riwayat pemesanan ke database pro-book
  fetch('/server/api/post_orders.php', { 
    method: 'post',
    body: JSON.stringify({
      user_id,
      book_id,
      rating: 0,
      comment: '',
      jumlah,
    })
  })
    .then(res => res.json())
    .then(status => { if (status === 0) { console.log(status) } else { openModal(status) } })
    .catch(err => console.error(err))
}