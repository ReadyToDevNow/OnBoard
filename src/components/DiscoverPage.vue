<template>
  <div class="left-78 top-18 right-8 absolute z-49">
    <div>
      <img class="h-80 w-300" src="@/assets/bg-city.jpg" alt="bg-city" />
    </div>
    <div class="grid grid-cols-12 gap-4 border">
      <div class="col-span-10 col-start-2">
        <div class="flex items-center">
          <img class="h-30 w-30 rounded-full object-cover mr-4" src="../assets/bg-temple.png" />
          <div class="flex flex-col">
            <span class="font-bold">Ragnar Lothbrok</span>
            <span>Developer / VueJs</span>
          </div>
        </div>
        <div class="flex flex-nowrap p-8 items-center overflow-x-scroll">
          <div class="flex flex-col items-center">
            <img class="h-20 w-20 mr-4" src="../assets/logo-add.png" />
            <span>Ajouter</span>
          </div>
          <!-- Remplacer par une boucle for pour gérer l'affichage de plusieurs photo de profils et des noms d'utilisateurs via-->
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
        <!-- 2 ème Partie -->
        <div class="mt-16 grid grid-cols-12">
          <!-- Colonne de gauche -->

          <div class="col-start-1 col-end-8 col-span-3">
            <div class="flex flex-row items-center">
              <img class="h-20 w-20 rounded-full object-cover mr-4" src="../assets/bg-temple.png" />
              <div class="flex flex-col">
                <span> Harry Potter </span>
                <span>Il y a 3 jours</span>
              </div>
              <button class="bg-sky-500 hover:bg-sky-300 p-1 rounded text-white ml-60">
                + Follow
              </button>
            </div>
            <div class="border-b border-gray-200 my-4 mr-6"></div>
          </div>

          <!-- Colonne de droite-->
          <div class="col-start-8 col-end-13">
            <span class="flex font-bold gap-4"> Digital Marketing </span>
            <span class="text-xl">
              A group of people who collectively are responsible for all of the work necessary to
              produce working, validated assets.</span
            >
            <div class="flex flex-col gap-4 mt-4 mb-4">
              <span>Industry</span>
              <span>Rating:</span>
              <span>Members:</span>
            </div>
            <div class="border-b border-gray-200 my-4"></div>
          </div>
          <!-- --------------------------------------------------------------------->

          <div class="col-start-8 col-end-13">
            <span class="flex text-2xlfont-bold gap-4"> Digital Marketing </span>
            <span class="text-xl">
              Because it's about motivating the doers. Because I’m here to follow my dreams and
              inspire other people to follow their dreams, too</span
            >
            <div class="flex flex-col gap-4 mt-4">
              <span>Industry</span>
              <span>Rating: </span>
              <span>Members: </span>
            </div>
            <div class="border-b border-gray-200 my-4"></div>
          </div>
          <!-- --------------------------------------------------------------------->
          <div class="col-start-8 col-end-13">
            <span class="flex text-2xlfont-bold gap-4"> Digital Marketing </span>
            <span class="text-xl">
              Because it's about motivating the doers. Because I’m here to follow my dreams and
              inspire other people to follow their dreams, too</span
            >
            <div class="flex flex-col gap-4 mt-4">
              <span>Industry</span>
              <span>Rating: </span>
              <span>Members: </span>
            </div>
            <div class="border-b border-gray-200 my-4"></div>
          </div>
          <!-- --------------------------------------------------------------------->
          <div class="col-start-8 col-end-13">
            <span class="flex text-2xlfont-bold gap-4"> Slack Meet </span>
            <span>11:00 AM</span>
            <span class="text-xl"> You Have an upcming meet for Marketing Planning</span>
            <div class="flex flex-col gap-4 mt-4">
              <span class="bg-gray-700">Meeting ID: 785-825-874</span>
              <span>Rating: </span>
              <span>Members: </span>
            </div>
            <div class="border-b border-gray-200 my-4"></div>
          </div>
          <!--------------------------------------------------------------------->
          <div class="col-start-8 col-end-13">
            <span class="flex text-2xlfont-bold gap-4"> Slack Meet </span>
            <span>11:00 AM</span>
            <span class="text-xl"> You Have an upcming meet for Marketing Planning</span>
            <div class="flex flex-col gap-4 mt-4">
              <span class="bg-gray-700">Meeting ID: 785-825-874</span>
              <span>Rating: </span>
              <span>Members: </span>
            </div>
          </div>
        </div>

        <span class="flex justify-center font-bold">Le reste</span>
        <span class="flex justify-center font-bold">Le reste</span
        ><span class="flex justify-center font-bold">Le reste</span
        ><span class="flex justify-center font-bold">Le reste</span
        ><span class="flex justify-center font-bold">Le reste</span
        ><span class="flex justify-center font-bold">Le reste</span
        ><span class="flex justify-center font-bold">Le reste</span
        ><span class="flex justify-center font-bold">Le reste</span
        ><span class="flex justify-center font-bold">Le reste</span
        ><span class="flex justify-center font-bold">Le reste</span
        ><span class="flex justify-center font-bold">Le reste</span
        ><span class="flex justify-center font-bold">Le reste</span
        ><span class="flex justify-center font-bold">Le reste</span
        ><span class="flex justify-center font-bold">Le reste</span
        ><span class="flex justify-center font-bold">Le reste</span
        ><span class="flex justify-center font-bold">Le reste</span
        ><span class="flex justify-center font-bold">Le reste</span
        ><span class="flex justify-center font-bold">Le reste</span
        ><span class="flex justify-center font-bold">Le reste</span
        ><span class="flex justify-center font-bold">Le reste</span
        ><span class="flex justify-center font-bold">Le reste</span
        ><span class="flex justify-center font-bold">Le reste</span
        ><span class="flex justify-center font-bold">Le reste</span
        ><span class="flex justify-center font-bold">Le reste</span
        ><span class="flex justify-center font-bold">Le reste</span
        ><span class="flex justify-center font-bold">Le reste</span
        ><span class="flex justify-center font-bold">Le reste</span
        ><span class="flex justify-center font-bold">Le reste</span
        ><span class="flex justify-center font-bold">Le reste</span>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style></style>
