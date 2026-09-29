"use client";

export default function EnquiryForm() {
  function send(e) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const msg =
      `Hello Puris Water, I'd like to enquire.%0AName: ${encodeURIComponent(f.get("name"))}` +
      `%0APhone: ${encodeURIComponent(f.get("phone"))}%0ACity: ${encodeURIComponent(f.get("city"))}` +
      `%0AI am a: ${encodeURIComponent(f.get("type"))}%0AQuantity needed: ${encodeURIComponent(f.get("qty"))}`;
    window.open(`https://wa.me/919111777175?text=${msg}`, "_blank", "noopener");
  }
  return (
    <form className="form" onSubmit={send}>
      <label>Your name<input name="name" required autoComplete="name" /></label>
      <label>Phone number<input name="phone" type="tel" required autoComplete="tel" /></label>
      <label>City or town<input name="city" required /></label>
      <label>I am a
        <select name="type">
          <option>Home customer</option>
          <option>Shop or retailer</option>
          <option>Hotel or restaurant</option>
          <option>Event organiser</option>
          <option>Future dealer or distributor</option>
        </select>
      </label>
      <label className="wide">What do you need? (sizes and quantity)
        <input name="qty" placeholder="e.g. 20 cartons of 1 litre" required />
      </label>
      <button className="btn solid wide" type="submit">Send enquiry on WhatsApp</button>
    </form>
  );
}