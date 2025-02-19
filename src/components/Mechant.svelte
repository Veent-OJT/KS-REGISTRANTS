<script lang="ts">

    interface Ticket {
      id: string;
      name: string;
      price: number;
      available: number;
      sold: number;
    }
  
    interface Voucher {
      id: string;
      code: string;
      discount: number;
      maxUses: number;
      used: number;
    }
  
    const tickets: Ticket[] = [
      {
        id: '1',
        name: 'Regular Ticket',
        price: 500,
        available: 100,
        sold: 50
      },
      {
        id: '2',
        name: 'VIP Ticket',
        price: 1000,
        available: 50,
        sold: 25
      },
      {
        id: '3',
        name: 'VVIP Ticket',
        price: 2000,
        available: 25,
        sold: 10
      }
    ];
  
    const vouchers: Voucher[] = [
      {
        id: '1',
        code: 'STUDENT',
        discount: 20,
        maxUses: 100,
        used: 45
      },
      {
        id: '2',
        code: 'EARLYBIRD',
        discount: 15,
        maxUses: 50,
        used: 30
      }
    ];
  
    let showNewTicketModal = false;
    let showNewVoucherModal = false;
  </script>
  
  <div class="space-y-8">
    <!-- Tickets Section -->
    <div class="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <div class="p-6 border-b border-gray-200">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-xl font-semibold text-gray-900">Tickets</h2>
            <p class="mt-1 text-sm text-gray-500">Manage your event tickets and pricing</p>
          </div>
          <button 
            class="px-4 py-2 bg-[#DF4D60] text-white rounded-lg hover:bg-[#eb6d80] transition-colors text-sm"
            on:click={() => showNewTicketModal = true}
          >
            Add Ticket
          </button>
        </div>
      </div>
      
      <div class="divide-y divide-gray-200">
        {#each tickets as ticket}
          <div class="p-6">
            <div class="flex items-start justify-between">
              <div class="space-y-1">
                <h3 class="text-lg font-medium text-gray-900">{ticket.name}</h3>
                <p class="text-2xl font-bold text-gray-900">₱{ticket.price.toLocaleString()}</p>
                <div class="flex items-center gap-4 mt-2">
                  <div class="flex items-center gap-1.5">
                    <span class="w-2 h-2 rounded-full bg-green-500"></span>
                    <span class="text-sm text-gray-500">{ticket.available} available</span>
                  </div>
                  <div class="flex items-center gap-1.5">
                    <span class="w-2 h-2 rounded-full bg-blue-500"></span>
                    <span class="text-sm text-gray-500">{ticket.sold} sold</span>
                  </div>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <button class="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-4.036L9 12.964V15h2.036l7.732-7.732a1.5 1.5 0 00-2.036-2.036z" />
                  </svg>
                </button>
                <button class="p-2 text-gray-400 hover:text-red-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        {/each}
        
      </div>
    </div>
  
    <!-- Vouchers Section -->
    <div class="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <div class="p-6 border-b border-gray-200">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-xl font-semibold text-gray-900">Vouchers</h2>
            <p class="mt-1 text-sm text-gray-500">Manage discount vouchers for your event</p>
          </div>
          <button 
            class="px-4 py-2 bg-[#DF4D60] text-white rounded-lg hover:bg-[#eb6d80] transition-colors text-sm"
            on:click={() => showNewVoucherModal = true}
          >
            Add Voucher
          </button>
        </div>
      </div>
      
      <div class="divide-y divide-gray-200">
        {#each vouchers as voucher}
          <div class="p-6">
            <div class="flex items-start justify-between">
              <div class="space-y-1">
                <div class="flex items-center gap-2">
                  <h3 class="text-lg font-medium text-gray-900">{voucher.code}</h3>
                  <span class="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                    {voucher.discount}% OFF
                  </span>
                </div>
                <div class="flex items-center gap-4 mt-2">
                  <div class="flex items-center gap-1.5">
                    <span class="w-2 h-2 rounded-full bg-green-500"></span>
                    <span class="text-sm text-gray-500">{voucher.maxUses - voucher.used} available</span>
                  </div>
                  <div class="flex items-center gap-1.5">
                    <span class="w-2 h-2 rounded-full bg-blue-500"></span>
                    <span class="text-sm text-gray-500">{voucher.used} used</span>
                  </div>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <button class="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-4.036L9 12.964V15h2.036l7.732-7.732a1.5 1.5 0 00-2.036-2.036z" />
                  </svg>
                </button>
                <button class="p-2 text-gray-400 hover:text-red-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        {/each}
        }
      </div>
    </div>
  
    <!-- Stats Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div class="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
        <div class="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
          </svg>
          <span class="text-gray-900">Total Tickets Sold</span>
        </div>
        <p class="text-3xl font-bold mt-2 text-gray-900">85</p>
      </div>
  
      <div class="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
        <div class="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span class="text-gray-900">Total Revenue</span>
        </div>
        <p class="text-3xl font-bold mt-2 text-gray-900">₱75,000</p>
      </div>
  
      <div class="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
        <div class="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span class="text-gray-900">Avg. Transaction Time</span>
        </div>
        <p class="text-3xl font-bold mt-2 text-gray-900">2m 30s</p>
      </div>
    </div>
  </div>