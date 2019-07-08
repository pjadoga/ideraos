<template>
	<v-container>
		<v-layout pa-4>
			<v-card flat tag= "h2" class=" transparent blue--text">{{title}}</v-card>
			<v-spacer></v-spacer>
			<v-card >
				<!-- <v-card-text contenteditable >
					10/06/2019 - 05:28-->
          <v-flex xs12 sm6 md4>
            <v-menu
              v-model= "menu"
              :close-on-content-click= "false"
              :nudge-right= "40"
              lazy
              transition= "scale-transition"
              offset-y
              full-width
              min-width= "290px"
            >
              <template
                v-slot:activator= "{on}"
              >
                <v-text-field
                  v-model="date"
                  label="Picker without buttons"
                  prepend-icon= "event"
                  readonly
                  v-on="on"
                >
                </v-text-field>
              </template>
              <v-date-picker
                v-model="date"
                @input="menu=false"
              >

              </v-date-picker>
            </v-menu>
          </v-flex>
			<!--	</v-card-text> -->
				<!-- <v-date-picker tag= "button" class=" date">
				</v-date-picker> -->
			</v-card>
		</v-layout>
		<v-layout 
			class=" justify-space-around"
		>
			<v-flex class=" white px-2" xs4>
				<div>
					<h3 class= "grey--text">Number of orders</h3>
				</div>
				<div class=" justify-space-between">
					<v-card flat ><v-vard-content> 5234</v-vard-content> </v-card>
					<v-card  flat class=" transparent right" style="width:40%">
						<v-img :src= "require('../assets/Bar Chart-2.svg')"></v-img>
					</v-card>
				</div>
			</v-flex>
			<v-flex class=" white" xs4 px-3>
				<div>
					<h3 class= " grey--text">Completed orders</h3>
				</div>
				<div class=" justify-space-between">
					<v-card flat style="min-height:'200'"><v-vard-content> 2234</v-vard-content></v-card>
					<v-card flat class=" transparent right" style="width:40%">
						<v-img :src= "require('../assets/Bar Chart-1.svg')"></v-img>
					</v-card>
				</div>
			</v-flex>
			<v-flex class=" white" xs4>
				<div>
					<h3 class= "grey--text">Abandoned orders</h3>
				</div>
				<div class=" justify-space-between">
					<v-card flat class=" align-center"><v-vard-content> 2343</v-vard-content></v-card>
					<v-card flat class=" transparent right" style="width:40%">
						<v-img :src= "require('../assets/Bar Chart.svg')"></v-img>
					</v-card>
				</div>
			</v-flex>
		</v-layout>
		<v-layout mx-1 pt-4><h1>Orders History</h1></v-layout>
		<v-layout mt-4 pt-2>
			<v-card flat pa-4 style="width:100%">
				<table style="width:100%"
					class="elevation-0 align-content-space-between justify-center ml-3"
				>
					<tr v-for="stuff in order.filter(item=>item.head)" :key= 'stuff.head' class=" grey--text"> 
						<th>{{stuff.order_id}}</th>
						<th>{{stuff.description}}</th>
						<th>{{stuff.payment_method}}</th>
						<th>{{stuff.shipping_method}}</th>
						<th>{{stuff.order_amount}}</th>
						<th>{{stuff.date}}</th>
						<th>{{stuff.status}}</th>
					</tr>
					<tr v-for="stuff in order.filter(item=>item.body)" :key= 'stuff.order_id'>
						<td>{{stuff.order_id}}</td>
						<td>{{stuff.description}}</td>
						<td>{{stuff.payment_method}}</td>
						<td>{{stuff.shipping_method}}</td>
						<td>{{stuff.order_amount}}</td>
						<td>{{stuff.date}}</td>
						<td>
							<v-btn 
								flat 
								round
								v-if= "stuff.status=='Abandoned'"
								class="red"
							>
								{{stuff.status}}
							</v-btn>
							<v-btn 
								flat 
								round
								v-else-if= "stuff.status=='Completed'"
								class="green"
							>
								{{stuff.status}}
							</v-btn>
							<v-btn 
								flat 
								round
								v-else
								class="blue"
								>
								{{stuff.status}}
							</v-btn>
						</td>
					</tr>
				</table>
			</v-card>
		</v-layout>
	</v-container>
</template>

<script>
export default {
	data:()=>({
    title: 'Orders',
    date: new Date().toISOString().substr(0, 10),
    modal: false,
    menu: false,
		order:[
			{
				order_id: '	ORDER ID', 
				description:`DESCRIPTION`, 
				payment_method:'PAYMENT METHOD', 
				shipping_method: 'SHIPPING METHOD',
				order_amount: 'ORDER AMOUNT', 
				date: 'DATE', 
				status: 'STATUS',
				head: true
			},
			{
				order_id: '001', 
				description:`Drizzle Grey Chambray Mix
				women's Cabrillo Sneakers`, 
				payment_method:'paystack', 
				shipping_method: 'MAX.NG',
				order_amount: '30,000', 
				date: '12/12/2011', 
				status: 'Abandoned',
				body:true
			},
			{
				order_id: '002', 
				description:`Drizzle Grey Chambray Mix
				women's Cabrillo Sneakers`, 
				payment_method:'flutterwave',
				shipping_method: 'MAX.NG', 
				order_amount: '30,000', 
				date: '12/12/2011', 
				status: 'In transit',
				body:true
			},
			{
				order_id: '003', 
				description:`Drizzle Grey Chambray Mix
				women's Cabrillo Sneakers`, 
				payment_method:'flutterwave', 
				shipping_method: 'MAX.NG',
				order_amount: '30,000', 
				date: '12/12/2011', 
				status: 'Completed',
				body:true
			}
		]
	})
}
</script>