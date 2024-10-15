let btnTambah = document.getElementById('btn-tambah');
let output = document.getElementById('output');
let modeToggle = document.getElementById('mode-toggle');

// Toggle Mode Gelap dan Terang
modeToggle.onclick = () => {
   document.body.classList.toggle('bg-latarGelap');
   document.body.classList.toggle('bg-latarTerang');
   document.body.classList.toggle('text-white');
   document.body.classList.toggle('text-teksGelap');

   // mengubah warna panel dan elemen input sesuai mode
   document.querySelectorAll('#input, #assignment').forEach(el => {
      el.classList.toggle('bg-panelGelap');
      el.classList.toggle('bg-panelTerang');
   });

   // mengubah teks tombol toggle
   if (document.body.classList.contains('bg-latarTerang')) {
      modeToggle.textContent = "Switch to Dark Mode";
   } else {
      modeToggle.textContent = "Switch to Light Mode";
   }
};

btnTambah.onclick = (e) => {
   let input = document.getElementById('assignment');
   let title = input.value.trim();
   if (title == "") {
      alert("Harap masukkan tugas");
      return;
   }

   let task = document.createElement("div");
   task.id = `${Date.now()}`;
   task.className = `flex justify-between items-center p-3 bg-biruUtama text-white rounded-full shadow-md space-x-4 transition transform duration-150 ease-in-out hover:scale-105 md:hover:scale-110`;

   task.innerHTML = `
      <div class="flex items-center space-x-3">
         <div class="w-6 h-6 flex items-center justify-center rounded-full bg-white">
            <input type="checkbox" class="appearance-none w-4 h-4 rounded-full border-2 border-biruUtama bg-abuCheckbox checked:bg-gray-800 checked:border-gray-800">
         </div>
         <p class="text-sm md:text-base lg:text-lg">${title}</p>
      </div>
      <button class="text-merahAksen hover:text-red-700">
         <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
         </svg>
      </button>
   `;

   task.querySelector('input[type="checkbox"]').onclick = (e) => {
      task.querySelector('p').classList.toggle('line-through');
      task.classList.toggle('bg-panelGelap');
   };

   task.querySelector('button').onclick = () => {
      task.classList.add("opacity-0");
      setTimeout(() => task.remove(), 300);
   };

   output.appendChild(task);
   input.value = "";
   e.preventDefault();
};
