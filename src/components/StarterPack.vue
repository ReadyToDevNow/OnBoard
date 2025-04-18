<template>
  <div class="p-4 max-w-xl mx-auto">
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Rechercher un produit..."
      class="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#51768C]"
    />

    <ul class="mt-4 space-y-2">
      <li v-for="item in filteredItems" :key="item.id" class="p-3 bg-white rounded shadow">
        {{ item.name }}
      </li>
    </ul>
  </div>

  <div class="p-6 max-w-4xl mx-auto space-y-8">
    <!-- Liste de produits -->
    <div>
      <h2 class="text-2xl font-bold mb-4 text-[#254159]">🛍️ Produits disponibles</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="product in products"
          :key="product.id"
          class="p-4 bg-white rounded shadow space-y-2"
        >
          <h3 class="text-lg font-semibold">{{ product.name }}</h3>
          <p class="text-gray-600">{{ product.price }} €</p>
          <button
            @click="addToCart(product)"
            class="bg-[#F27405] hover:bg-[#F24405] text-white px-4 py-2 rounded"
          >
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>

    <!-- Panier -->
    <div>
      <h2 class="text-2xl font-bold mb-4 text-[#254159]">🛒 Mon Panier</h2>
      <div v-if="cart.length === 0" class="text-gray-500">Ton panier est vide...</div>
      <div v-else class="space-y-4">
        <div
          v-for="(item, index) in cart"
          :key="index"
          class="flex justify-between items-center bg-[#88B0BF] text-white p-4 rounded"
        >
          <div>{{ item.name }} x {{ item.quantity }}</div>
          <div class="flex items-center gap-2">
            <span>{{ item.price * item.quantity }} €</span>
            <button @click="removeFromCart(index)" class="text-red-700 hover:underline">
              Supprimer
            </button>
          </div>
        </div>

        <div class="text-right text-lg font-bold text-[#254159]">Total : {{ totalPrice }} €</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const searchQuery = ref('')

const items = ref([
  { id: 1, name: 'Ordinateur portable' },
  { id: 2, name: 'Écouteurs sans fil' },
  { id: 3, name: 'Smartphone' },
  { id: 4, name: 'Clavier mécanique' },
  { id: 5, name: 'Webcam Full HD' },
])

const filteredItems = computed(() => {
  return items.value.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.value.toLowerCase()),
  )
})
const products = ref([
  { id: 1, name: 'Casque Bluetooth', price: 59 },
  { id: 2, name: 'Clavier gamer', price: 89 },
  { id: 3, name: 'Écran 27"', price: 199 },
  { id: 4, name: 'Souris ergonomique', price: 39 },
])

const cart = ref([])

function addToCart(product) {
  const existing = cart.value.find((item) => item.id === product.id)
  if (existing) {
    existing.quantity++
  } else {
    cart.value.push({ ...product, quantity: 1 })
  }
}

function removeFromCart(index) {
  cart.value.splice(index, 1)
}

const totalPrice = computed(() =>
  cart.value.reduce((total, item) => total + item.price * item.quantity, 0),
)
</script>

<style scoped>
body {
  background-color: #f4f4f4;
}
</style>
