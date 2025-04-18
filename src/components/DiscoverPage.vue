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

          <div class="col-start-1 col-end-8">
            <div class="flex flex-row items-center">
              <img class="h-20 w-20 rounded-full object-cover mr-4" src="../assets/bg-temple.png" />

              <div class="flex flex-col">
                <span>Harry Potter</span>
                <span>Il y a 3 jours</span>
              </div>
              <div class="col-start-5">
                <button class="bg-sky-500 hover:bg-sky-300 p-2 rounded text-white">+ Follow</button>
              </div>
            </div>

            <div class="border-b border-gray-200 my-4 mr-6"></div>
            <span
              >Personal profiles are the perfect way for you to grab their attention and persuade
              recruiters to continue reading your CV because you’re telling them from the off
              exactly why they should hire you.</span
            >
            <img class="rounded my-4 w-138" src="../assets/bg-temple.png" />
            <div class="border-b border-gray-200 my-4 mr-6"></div>

            <div class="flex flex-row items-center mb-4">
              <img
                class="h-15 w-15 rounded-full object-cover mr-4"
                src="../assets/bg-temple.png"
                alt=""
              />
              <div class="flex flex-col">
                <span class="font-bold text-2xl mb-2">Micheal Lewis</span>
                <span
                  >I always felt like I could do anything. That’s the main thing people are
                  controlled by! Thoughts- their perception of themselves!</span
                >
              </div>
            </div>
            <div class="flex flex-row items-center mb-4">
              <img
                class="h-15 w-15 rounded-full object-cover mr-4"
                src="../assets/bg-temple.png"
                alt=""
              />
              <div class="flex flex-col">
                <span class="font-bold text-2xl mb-2">Jessica Stones</span>
                <span
                  >Society has put up so many boundaries, so many limitations on what’s right and
                  wrong that it’s almost impossible to get a pure thought out. It’s like a little
                  kid, a little boy.</span
                >
              </div>
            </div>
            <div class="flex flex-row items-center mb-4">
              <img
                class="h-15 w-15 rounded-full object-cover mr-4"
                src="../assets/bg-temple.png"
                alt=""
              />
              <textarea
                class="border-b border-gray-300 border-t-0 border-l-0 border-r-0"
                id="post"
                name="post"
                rows="5"
                cols="300"
                placeholder="Write your comment"
              ></textarea>
            </div>
          </div>

          <!-- Colonne de droite-->
          <div class="col-start-9 col-end-13">
            <span class="flex font-bold text-2xl text-blue-500/90 mb-6"> Digital Marketing </span>
            <span class="text-xl">
              A group of people who collectively are responsible for all of the work necessary to
              produce working, validated assets.</span
            >
            <div class="flex flex-col gap-4 mt-4 mb-4">
              <div class="flex items-center justify-between">
                <span>Industry</span>
                <span> MARKETING TEAM</span>
              </div>
              <span>Rating:</span>
              <span>Members:</span>
            </div>
            <div class="border-b border-gray-200 my-4"></div>

            <!-- --------------------------------------------------------------------->

            <div class="col-start-8 col-end-13">
              <span class="flex font-bold text-2xl text-blue-500/90 mb-6"> Design </span>
              <span class="text-xl">
                Because it's about motivating the doers. Because I’m here to follow my dreams and
                inspire other people to follow their dreams, too</span
              >
              <div class="flex flex-col gap-4 mt-4">
                <div class="flex justify-between">
                  <span>Industry</span>
                  <span> DESIGN TEAM</span>
                </div>
                <span>Rating: </span>
                <span>Members: </span>
              </div>
              <div class="border-b border-gray-200 my-4"></div>
            </div>
            <!-- --------------------------------------------------------------------->

            <!-- --------------------------------------------------------------------->
            <div class="col-start-8 col-end-13">
              <div class="flex flex-row items-center mb-4">
                <img class="h-15 w-15 mr-4" src="../assets/logo-slack.png" />
                <div class="flex flex-col">
                  <span class="font-bold text-2xl text-blue-500/90"> Slack Meet </span>
                  <span class="font-bold">11:00 AM</span>
                </div>
              </div>
              <span class="text-xl"> You Have an upcming meet for Marketing Planning</span>
              <div class="flex flex-col gap-4 mt-4">
                <span class="bg-gray-700/20 w-max">Meeting ID: 785-825-874</span>
              </div>
              <div class="border-b border-gray-200 my-4"></div>
              <button
                class="bg-black rounded-3xl btn-transform focus:outline-offset-2 focus:outline-dark shadow shadow-black w-18 p-1 mb-4 text-white"
              >
                JOIN
              </button>
            </div>
            <!--------------------------------------------------------------------->
            <div class="col-start-8 col-end-13 mb-40">
              <div class="flex flex-row items-center">
                <img class="h-15 w-15 mr-4" src="../assets/logo-google-meet.png" />
                <div class="flex flex-col mb-4">
                  <span class="flex font-bold text-2xl text-blue-500/90">Google Meet</span>
                  <span class="font-bold">11:00 AM</span>
                </div>
              </div>
              <span class="text-xl">You Have an upcming meet for Marketing Planning</span>
              <div class="flex flex-col gap-4 mt-4">
                <span class="bg-gray-700/20 w-max">Meeting ID: 785-825-874</span>
              </div>
              <div class="border-b border-gray-200 my-4"></div>
              <button
                class="bg-black rounded-3xl btn-transform focus:outline-offset-2 focus:outline-dark shadow shadow-black w-18 p-1 text-white"
              >
                JOIN
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style>
/*bg-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500*/
.btn-transform {
  transition: ease-in-out;
  transition-delay: 150;
  transition-duration: 300ms;
}
.btn-transform:hover {
  transform: translateY(-0.25rem) scale(1.1);
  background-color: rgba(1, 13, 24, 0.507);
}
</style>
