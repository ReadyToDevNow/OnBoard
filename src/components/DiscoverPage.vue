<template>
  <div class="left-78 top-18 right-8 absolute z-49">
    <div>
      <img class="h-80 w-300" src="@/assets/bg-city.jpg" alt="bg-city" />
    </div>
    <div class="grid grid-cols-12 gap-4 border">
      <div class="col-span-10 col-start-2 border">
        <div class="flex items-center border">
          <img class="h-30 w-30 rounded-full object-cover mr-4" src="../assets/bg-temple.png" />
          <div class="flex flex-col items-center">
            <span class="font-bold">Ragnar Lothbrok</span>
            <span>Developer / VueJs</span>
          </div>
        </div>
        <!-- Remplacer par une boucle for pour gérer l'affichage de plusieurs photo de profils et des noms d'utilisateurs-->
        <div class="flex flex-nowrap p-8 items-center overflow-x-scroll">
          <div class="flex flex-col items-center">
            <img class="h-20 w-20 mr-4" src="../assets/logo-add.png" />
            <span>Ajouter</span>
          </div>
          <div class="flex flex-row">
            <div class="flex flex-col items-center">
              <img class="h-20 w-20 rounded-full object-cover mr-4" src="../assets/bg-temple.png" />
              <span>Ragnar L</span>
            </div>
            <div class="flex flex-col items-center">
              <img class="h-20 w-20 rounded-full object-cover mr-4" src="../assets/bg-temple.png" />
              <span>Charlotte W</span>
            </div>
            <div class="flex flex-col items-center">
              <img class="h-20 w-20 rounded-full object-cover mr-4" src="../assets/bg-temple.png" />
              <span>Eric F</span>
            </div>
            <div class="flex flex-col items-center">
              <img class="h-20 w-20 rounded-full object-cover mr-4" src="../assets/bg-temple.png" />
              <span>Liliane G</span>
            </div>
            <div class="flex flex-col items-center">
              <img class="h-20 w-20 rounded-full object-cover mr-4" src="../assets/bg-temple.png" />
              <span>Alex J</span>
            </div>
            <div class="flex flex-col items-center">
              <img class="h-20 w-20 rounded-full object-cover mr-4" src="../assets/bg-temple.png" />
              <span>Jose N</span>
            </div>
            <div class="flex flex-col items-center">
              <img class="h-20 w-20 rounded-full object-cover mr-4" src="../assets/bg-temple.png" />
              <span>Mélanie L</span>
            </div>
            <div class="flex flex-col items-center">
              <img class="h-20 w-20 rounded-full object-cover mr-4" src="../assets/bg-temple.png" />
              <span>Gabriel M</span>
            </div>
            <div class="flex flex-col items-center">
              <img class="h-20 w-20 rounded-full object-cover mr-4" src="../assets/bg-temple.png" />
              <span>Jerome H</span>
            </div>
          </div>
        </div>

        <span class="flex justify-center font-bold border">Discover</span>
        <span class="flex justify-center font-bold border">Discover</span>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style></style>
