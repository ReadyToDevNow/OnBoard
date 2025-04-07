<template>
  <div class="left-78 top-8 right-8 absolute">
    <div class="grid grid-cols-3 gap-4 mb-4">
      <div class="card">
        <div class="flex flex-col">
          <span>Sales</span>
          <span class="font-bold">$270.240</span>
          <div>
            <span class="text-green-500"> +45% </span>
            <span> since the last month</span>
          </div>
        </div>
        <span>2 June - 3 June</span>
      </div>
      <div class="card">
        <div class="flex flex-col">
          <span>Customers</span>
          <span class="font-bold">3.200</span>
          <div>
            <span class="text-green-500">+12% since</span>
            <span> last month</span>
          </div>
        </div>
        <span> 2 June - 3 June</span>
      </div>

      <div class="card">
        <div class="flex flex-col">
          <span>Avg. Revenue</span>
          <span class="font-bold">$1.200</span>
          <div>
            <span class="text-green-500">+$121 </span>
            <span>since last month</span>
          </div>
        </div>
        <span>2 June - 3 June </span>
      </div>
    </div>
    <div class="grid grid-cols-6 gap-4 mb-4">
      <div class="col-span-2 card">Card 1</div>
      <div class="col-span-4 card">Card 2</div>
    </div>
    <div class="grid grid-cols-6 gap-4 mb-4">
      <div class="col-span-4 card">Card 1</div>
      <div class="col-span-2 card">Card 2</div>
    </div>
    <div class="card">Top SellingProducts</div>
  </div>
</template>

<script setup></script>

<style>
.card {
  border: 1px solid white;
  border-radius: 0.6rem;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: white;
}
</style>
