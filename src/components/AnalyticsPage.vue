<template>
  <div class="left-78 top-8 right-8 absolute z-49">
    <div class="grid grid-cols-3 gap-4 mb-4">
      <div class="card">
        <div class="flex flex-col">
          <span>Sales</span>
          <span class="font-bold">$270.240</span>
          <span> 45% since the last month </span>
        </div>
        <span class="">2 June - 6 June</span>
      </div>
      <div class="card">
        <span>Customers</span>
        <span>3.200</span>
        <span>+ 12% since last month</span>
      </div>
      <div class="card">
        <span>Avg. Revenue</span>
      </div>
    </div>
    <div class="grid grid-cols-6 gap-4 mb-4">
      <div class="col-span-2 border">Card 1</div>
      <div class="col-span-4 border">Card 2</div>
    </div>
    <div class="grid grid-cols-6 gap-4 mb-4">
      <div class="col-span-4 border">Card 1</div>
      <div class="col-span-2 border">Card 2</div>
    </div>
    <div class="border">Top SellingProducts</div>
  </div>
</template>

<script setup></script>

<style>
.card {
  border: 1px solid #000000;
  border-radius: 0.6rem;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
}
</style>
