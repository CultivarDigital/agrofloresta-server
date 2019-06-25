import axios from 'axios'
import queries from '@/store/queries'
import tipos_de_usuario from '@/data/tipos-de-usuario.json'
import auth from '@/auth'
import * as cpf from "@fnando/cpf"
import * as cnpj from "@fnando/cnpj"

export default {
  data() {
    return {
      error: false,
      isLoading: false,
      isSending: false,
      tipos_de_usuario: tipos_de_usuario
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.currentUser
    },
    isAdmin() {
      var currentUser = this.$store.state.currentUser
      if (currentUser && currentUser.roles) {
        return currentUser.roles.includes('admin')
      }
      return false
    },
    baseUrl() {
      return axios.defaults.baseURL.replace('/api', '')
    }
  },
  methods: {
    isEditing() {
      return !!this.$route.params.id
    },
    apiDataToForm(form, data) {
      Object.keys(form).map((key) => {
        if (data && data[key]) {
          if (typeof data[key] == 'string' && data[key].indexOf('T00:00:00.000Z') > -1) {
            form[key] = data[key].replace(/T00:00:00.000Z/g, '')
          } else {
            form[key] = data[key]
          }
        }
      })
    },
    present(field, item) {
      if (item) {
        return !!field[item]
      } else {
        return !!field
      }
    },
    getList(type) {
      var list = this.$store.state[type]
      if (!list || !list.length) {
        this.loadList(type)
      }
      return list
    },
    async loadList(type) {
      return await queries.loadList(type).catch(this.showError)
    },
    showError(error) {
      if (error.response) {
        if (error.response.data) {
          if (error.response.status == 401 && error.response.data.indexOf('invalid signature') > -1) {
            this.error = 'Sessão expirada!'
            auth.logout(function() {
              this.$router.replace('/')
            })
          } else if (error.response.data.message) {
            this.error = error.response.data.message
          } else {
            this.error = error.response.data
          }
        } else {
          this.error = error.response
        }
      }
      this.isLoading = false
      this.isSending = false
    },
    formatCity(address) {
      return address ? [
          address.city,
          address.uf,
        ].filter(Boolean).join(' - ') :
        '';
    }
  },
  filters: {
    cpf: function(value) {
      return cpf.format(value);
    },
    cnpj: function(value) {
      return cnpj.format(value);
    },
    data: function(value) {
      return value.toLocaleDateString('pt-BR');
    },
    address: function(address) {
      return address ? [
          address.address,
          address.city,
          address.uf,
          address.postal_code
        ].filter(Boolean).join(' - ') :
        '';
    },
    city: function(address) {
      return address ? [
          address.city,
          address.uf,
        ].filter(Boolean).join(' - ') :
        '';
    },
    filename: function(fileUrl) {
      if (fileUrl) {
        let urlArr = fileUrl.split('/')
        return urlArr[urlArr.length - 1]
      }
      return ''
    },
    roles: function(roles) {
      return roles.map(r => tipos_de_usuario.find(e => e.value == r)).filter(n => n).map(v => v.text).join(', ')
    }
  }

}
