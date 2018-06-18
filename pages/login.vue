<template>
<div class="login" >
    <v-container fluid>
      <v-layout align-center justify-center>
        <v-card width="600px" hover raised>
          <v-card-title ><h2> Accedi al Portale</h2></v-card-title>
          <v-card-text>
            <v-form ref="form">
              <v-text-field 
                prepend-icon="person"
                v-model="email"
                v-validate="'required|email'"
                :error-messages="errors.collect('email')"
                label="Email"
                data-vv-name="email"
              ></v-text-field>
              <v-text-field
                prepend-icon="lock"
                :append-icon="e1 ? 'visibility_off' : 'visibility'"
                :append-icon-cb="() => (e1 = !e1)"
                :type="e1 ? 'password' : 'text'"
                v-model="password"
                v-validate="{ required: true, min: 10}"    
                label="Password"
                :error-messages="errors.collect('pass')"
                data-vv-name="pass"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="orange" v-on:click="submit">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-layout>
    </v-container>
</div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  middleware: ['no-auth'],
  $_veeValidate: {
    validator: 'new'
  },
  name: 'login',
  data: () => ({
    password: 'test1234',
    email: 'test@test.com',
    e1: true
  }),
  computed: {
    ...mapGetters([
      'logged'
    ])
  },
  mounted () {
    var attributes = {
      email: 'E-mail Address',
      pass: 'Password'
    }
    this.$validator.localize('en', attributes)
  },
  methods: {
    ...mapMutations([
      'login'
    ]),
    submit: function () {
      let user = {
        username: 'test@test.com',
        password: 'test1234'
      }
      if (this.email === user.username && this.password === user.password) {
        this.login()
        this.$router.push('/')
      }
    }
  }
}
</script>