<template>
  <div>
    <van-nav-bar title="食品"></van-nav-bar>
    <van-grid :column-num="2" icon-size="3rem">
      
      <van-grid-item v-for="item in mockData.data.results" 
      :key="item.recipe_id" 
      :icon="item.cover_ko" 
      :text="item.title_ko" to="/homedetail">
      </van-grid-item>
    </van-grid>
    
  </div>
</template>

<script>
import network from "@/network/network.js"
// import homecell from "@/business/home/pqhome.vue"
import Homecell from './homecell.vue'

export default {
  data() {
    return {
      pageData:{
        isloading: false,
        isLast: true,
        // content:mockData.results,
      },
      mockData: {
          "code": "000000",
          "msg": "success",
          "data": {
              "count": 97,
              "next": "http://39.105.221.84:8000/api/recipe/?page=2",
              "previous": null,
              "results": [
                  {
                      "recipe_id": "6884636",
                      "cover_ko": "https://recipe1.ezmember.co.kr/cache/recipe/2018/02/27/b5806f01ccb6f6d5d9aa94bdd6f4287e1_m.jpg",
                      "cover_zh": null,
                      "url": "https://m.10000recipe.com/recipe/6884636",
                      "category_ko": "",
                      "category_zh": "",
                      "category_predict": "",
                      "title_ko": "부대찌개양념만드는법홀릭되는맛임",
                      "title_zh": "",
                      "title_predict": "",
                      "info_ko": "{'description': ' 밖에서 파는 맛처럼 맛있는 부대찌개 양념 만드는 법! 고추장을 넣으면 텁텁해지면서 고추장 맛이 나고 별로인 분들에게 알려드리고 싶은 팁이에요! 고춧가루와 시중에 판매하는 사골곰탕 육수만 있으면 밖에서 파는 것보다 더 맛있는 부대찌개를 만들 수가 있답니다. 예비신랑님이 와 이건 대박이라며 너무나 좋아했던 요리인데요! 자신 있는 요리이니 꼭 따라해보세요.    ', 'count': '2인분', 'time': '30분이내', 'level': '초급'}",
                      "info_zh": "",
                      "info_predict": "",
                      "ingredient_ko": "[{'type': '[재료]', 'type_list': [{'ingredient': '김치', 'qty': '1/4밥공기(1줌)'}, {'ingredient': '비엔나', 'qty': '20개'}, {'ingredient': '스팸', 'qty': '1개'}, {'ingredient': '두부', 'qty': '1/3모'}, {'ingredient': '떡', 'qty': '1줌'}, {'ingredient': '대파10센티', 'qty': '4개'}, {'ingredient': '홍고추', 'qty': '2개'}, {'ingredient': '청양고추큰거', 'qty': '2개'}, {'ingredient': '사골곰탕', 'qty': '1봉지'}]}, {'type': '[양념]', 'type_list': [{'ingredient': '된장', 'qty': '1/2큰술'}, {'ingredient': '고추가루', 'qty': '4큰술'}, {'ingredient': '마늘', 'qty': '2큰술'}, {'ingredient': '국간장', 'qty': '2큰술'}, {'ingredient': '설탕', 'qty': '1/2큰술'}, {'ingredient': '물', 'qty': '1/2소주컵'}]}]",
                      "ingredient_zh": "",
                      "ingredient_predict": "",
                      "step_ko": "[{'step_index': '1', 'step': '고추는 어슷썰고 두부는 한입크기로 썰어주세요.', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2018/03/02/401abc94cf829ce0c6768e8385610d9b1.jpg'}, {'step_index': '2', 'step': '스팸은 반드시 얇게 잘라주세요. 두꺼우면 국물 맛이 제대로 안 배고 맛이 따로 놀아요. 비엔나는 사선으로 잘라주세요.', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2018/03/02/f907b1467f426e6d0b639c772fc13f9d1.jpg'}, {'step_index': '3', 'step': '떡은 너무 많이 넣으면 국물이 텁텁해지므로 반드시 1줌만 넣어주세요.', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2018/03/02/d6f2e5481d3ac6e327d4a7cb75ab59241.jpg'}, {'step_index': '4', 'step': '김치도 많이 넣으면 김치맛이 많이 나요. 적당한 밸런스가 중요한데요. 밥공기 1/4 넣어주세요.', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2018/03/02/41bcd33b4e595b1794255c38c784b39d1.jpg'}, {'step_index': '5', 'step': '된장반큰술,고추가루 4큰술(듬뿍), 마늘2큰술, 국간장2큰술, 설탕반큰술, 물 소주컵 반컵을 섞어주세요.', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2018/03/02/55acf2ceb57cb2e7710839b9117e63951.jpg'}, {'step_index': '6', 'step': '두부, 햄, 떡을 테두리에 두르고 김치는 가운데 넣어주세요.', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2018/03/02/eeb8ad48c4f6df688f2f386ddbdca2c61.jpg'}, {'step_index': '7', 'step': '양념장 올려주세요.', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2018/03/02/e5ed6c9dec2d35c139a86776816c31181.jpg'}, {'step_index': '8', 'step': '사골곰탕 육수를 1봉지 붓고', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2018/03/02/a4f85fd9486897bb2a41147bc12f18ff1.jpg'}, {'step_index': '9', 'step': '물 보충을 해주세요.', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2018/03/02/18ce23ec5261560b65447dda52a419091.jpg'}, {'step_index': '10', 'step': '대파와 청양고추 홍고추 모두 올려주세요.', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2018/03/02/f0d88d45b602ca9b96fe4e1d4e874cc51.jpg'}, {'step_index': '11', 'step': '이제 팔팔 끓입니다.', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2018/03/02/688e43221e60bd8536fb1263b89c7f6d1.jpg'}, {'step_index': '12', 'step': '청양고추와 대파가 어우러져 매콤한 향이 올라와요. 냄새부터 다르답니다.', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2018/03/02/05d8c9b69f5f74765fcf6b454e07e5531.jpg'}, {'step_index': '13', 'step': '부대찌개 만드는법 이대루 하면 반드시 성공!', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2018/03/02/0991332151b72bcd2d50c8acddcde1901.jpg'}, {'step_index': '14', 'step': '라면은 먹다가 나중에 추가해서 먹어도 되구요~ 저는 팔팔 끓인 후 바로 넣어줬어요.', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2018/03/02/b129046a47ebd50d987a7b433a7325471.jpg'}, {'step_index': '15', 'step': '라면을 끓이려면 국물이 여유가 있어야 해요. 라면 넣기 전 육수가 너무 졸았다면 물 보충을 해주고 끓이세요.', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2018/03/02/677fadcd2f2f57747a72d0303cc8fe881.jpg'}, {'step_index': '16', 'step': '짜잔 요 정도 국물이어야 맛있답니다.', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2018/03/02/40b470bc2e82beb7ffa4b6cc678687711.jpg'}, {'step_index': '17', 'step': '칼칼하면서 진한 맛이랍니다. 부대찌개 완성!', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2018/03/02/dcc4f03391adc1888839ba7e6d6ba96f1.jpg'}]",
                      "step_zh": "",
                      "step_predict": "",
                      "use_yn": "",
                      "upload_yn": ""
                  },
                  {
                      "recipe_id": "6876357",
                      "cover_ko": "https://recipe1.ezmember.co.kr/cache/recipe/2017/09/12/e082636233ee03a012fc656d428df5971_m.jpg",
                      "cover_zh": null,
                      "url": "https://m.10000recipe.com/recipe/6876357",
                      "category_ko": "",
                      "category_zh": "",
                      "category_predict": "",
                      "title_ko": "닭볶음탕진짜진짜황금레시피알려드려요~~^^",
                      "title_zh": "",
                      "title_predict": "",
                      "info_ko": "{'description': ' 닭볶음탕 레시피입니다<p> </p> 아래 유튜브 동영상도 있으니 주소 클릭하셔서 참고 하셔도 조을듯요~~~^^<p> </p>https://youtu.be/Q3SqbUUuSrY<p> </p><p> </p>다른요리가 궁금하시면 채널주소로 ㄱㄱ<p> </p>https://m.youtube.com/channel/UC62lSbFDMublcifIjVexQFQ<p> </p><p> </p>저희가족 가끔가는 닭볶음탕 맛집이 있는데요 너무 맛있어서 제가 한번 따라해 봤어요<p> </p>인터넷도 여기저기 뒤져보고 했는데 딱 요레시피가거의 근접한 맛이 나더라구요<p> </p>닭볶음탕 좋아하시는분들<p> </p> 꼭 한번 해보시길요~~<p> </p>    ', 'count': '3인분', 'time': '60분이내', 'level': '초급'}",
                      "info_zh": "",
                      "info_predict": "",
                      "ingredient_ko": "[{'type': '[재료]', 'type_list': [{'ingredient': '닭', 'qty': '1마리'}, {'ingredient': '당면', 'qty': ''}, {'ingredient': '감자', 'qty': '3개'}, {'ingredient': '당근', 'qty': '1/2쪽'}, {'ingredient': '양파', 'qty': '1~1.5개'}, {'ingredient': '고추', 'qty': '3개'}, {'ingredient': '대파', 'qty': '1대'}, {'ingredient': '다진마늘', 'qty': '5쪽'}, {'ingredient': '우유', 'qty': '200ml'}]}, {'type': '[육수]', 'type_list': [{'ingredient': '멸치', 'qty': ''}, {'ingredient': '다시마', 'qty': ''}, {'ingredient': '표고버섯', 'qty': ''}]}, {'type': '[양념]', 'type_list': [{'ingredient': '간장', 'qty': '8~11큰술'}, {'ingredient': '고추장', 'qty': '4큰술'}, {'ingredient': '고춧가루', 'qty': '2큰술'}, {'ingredient': '요리당', 'qty': '6큰술'}, {'ingredient': '간양파', 'qty': '1/2개'}, {'ingredient': '청주', 'qty': '1큰술'}, {'ingredient': '물', 'qty': '400~600ml'}, {'ingredient': '후추', 'qty': '약간'}, {'ingredient': '참기름', 'qty': '약간'}, {'ingredient': '액젓', 'qty': '1큰술'}]}]",
                      "ingredient_zh": "",
                      "ingredient_predict": "",
                      "step_ko": "[{'step_index': '1', 'step': '닭 한마리를 준비 합니다\\n저희집은 가족이 5명이라 두마리를 준비했어요\\n대식가거든요 ㅎㅎ', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2017/09/12/15647064bb8ac9953a8acaf01eb1194f1.jpg'}, {'step_index': '2', 'step': '당면을 물에 불려 줍니다', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2017/09/12/4b622bc99c934f7d0978c8c93e6d1e391.jpg'}, {'step_index': '3', 'step': '닭을 깨끗이 씻어 손질 해 줍니다', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2017/09/12/818ba5391cf69accfe428b46c7f620371.jpg'}, {'step_index': '4', 'step': '닭 사이사이 붙어있는 기름을 제거해주면 좋아요', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2017/09/12/fb119a09893ce5a4569e59f8f02a887d1.jpg'}, {'step_index': '5', 'step': '잡내를 없애기 위해 우유에 30분정도 담가 둡니다', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2017/09/12/b6e7c28704dcaaea9912db931c906a8e1.jpg'}, {'step_index': '6', 'step': '지금부터 이부분은 해도되고 건너 뛰어도 되는 과정 인데요\\n닭을 한번후루룩 끓여 줍니다', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2017/09/12/df9aa065989efc1caf517cd89998d0021.jpg'}, {'step_index': '7', 'step': '닭끓인 물을 버리고 차가운물로 헹궈줍니다\\n이부분에서 제가 두가지를 해봤는데요\\n1.닭을 우유에 담갔다가 씻은후 삶지않고 조리한경우\\n2.닭을우유에 담갔다가 삶아서 조리한 경우 \\n한번 삶아서 육수를 버리고난 닭볶음탕은 깊은맛이 없더라구요\\n닭의 잡내를 잡아주는건 좋은데 그냥유유에만 한번 담가주는 방법이 훨씬 진하고 맛있다는 사실 ㅎ\\n무튼 취향대로 하시면 좋을것 같아요~~^^', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2017/09/12/68623e3b61a3f0bfa8d3219a75b3189e1.jpg'}, {'step_index': '8', 'step': '고기를 냄비에두고 \\n닭한마리기준\\n간장9~11 고추장4 고춧가루2 양파갈은거1/2 마늘5알 요리당6 청주1 후추약간 액젓1액젓을 넣으면 감칠맛이 살아나요. 단, 싱겁게 드시는 분들은 간장을 줄이시고 액젓을 추가해요. ', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2017/09/12/e55ccf5037db3448d5681f5315d3ec221.jpg'}, {'step_index': '9', 'step': '이렇게 양념소스를 만들어 주세요\\n요거 진짜 맛집 하고 거의 흡사한 맛이에요 \\n맛집은 낙지나 새우를 첨가해 주기도 하죠!', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2017/09/12/0eabb604c0c333a7860a3fedf67532a91.jpg'}, {'step_index': '10', 'step': '냄비에 양념장과 육수600ml를 넣고 한소끔 끓여 줍니다\\n물대신 육수를 넣어주시면 좀더 감칠맛이 나는데 물로하셔도 맛있어요\\n육수는 물로 대체 가능물은 당면 넣지 않을때 400ml, 넣을때 600ml를 넣어요. ', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2017/09/12/2c29fe21bc5192b87e016c51595ceb9e1.jpg'}, {'step_index': '11', 'step': '그사이에 야채손질을 해주시는데요\\n감자는 모서리를 깎아서 넣는게 좋아요\\n그렇지않으면 감자가 으깨져서 국물이 텁텁해 질수가 있거든요\\n깎고 남은 감자는 된장찌개에 넣으시면 좋아요', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2017/09/12/99f675ad5f83861dd798119537f990e01.jpg'}, {'step_index': '12', 'step': '한소끔 끓을때 감자를 넣어 뚜껑을 덮고 중불에 30분정도 끓여 주세요', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2017/09/12/5068a0085c8f4285ad8ee708c74a72fc1.jpg'}, {'step_index': '13', 'step': '대파 양파 당근 고추를 적당한 크기로 잘라 준비해주세요', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2017/09/12/1c20e04bdb1dbed4068606c415ed83041.jpg'}, {'step_index': '14', 'step': '이제 어느정도 닭과 감자가익었네요', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2017/09/12/08cee8ab9c7054f243187708e6dc8d131.jpg'}, {'step_index': '15', 'step': '나머지 야채를 넣고', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2017/09/12/15524d60043266e2f70fe3c6b3c4a1321.jpg'}, {'step_index': '16', 'step': '한번더 끓입니다\\n국물이 넉넉한게 좋으신 분들은 육수를 조금더 추가하고 양념도 살짝 추가 하시면 됩니다', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2017/09/12/43c67ef0e25f4649040e3edebadbf0df1.jpg'}, {'step_index': '17', 'step': '아까 준비해둔 당면을 살짝 삶아 첨가해주세요\\n삶지않고 충분히 불려서 넣으셔도 됩니다\\n불릴시간이 없으시면 삶아서 넣어주세요\\n당면은 안넣으셔도 상관 없어요\\n참기름 후추(선택가능)도 살짝 첨가해주심 끝', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2017/09/12/8a64e811117ac8b1481ee52bd443b85c1.jpg'}]",
                      "step_zh": "",
                      "step_predict": "",
                      "use_yn": "",
                      "upload_yn": ""
                  },
                  {
                      "recipe_id": "6894096",
                      "cover_ko": "https://recipe1.ezmember.co.kr/cache/recipe/2018/08/13/3233d427883d15239f297aeeaf1775531_m.jpg",
                      "cover_zh": null,
                      "url": "https://m.10000recipe.com/recipe/6894096",
                      "category_ko": "",
                      "category_zh": "",
                      "category_predict": "",
                      "title_ko": "너무간단한데맛있어서놀라는백종원분식점떡볶이황금레시피",
                      "title_zh": "",
                      "title_predict": "",
                      "info_ko": "{'description': ' 분식점에서 파는 맛 나는 백주부님 떡볶이!만드는 방법은 너무 간단한데 맛있어서 놀랜답니다!    ', 'count': '2인분', 'time': '15분이내', 'level': '아무나'}",
                      "info_zh": "",
                      "info_predict": "",
                      "ingredient_ko": "[{'type': '[재료]', 'type_list': [{'ingredient': '떡볶이떡', 'qty': '2컵'}, {'ingredient': '물', 'qty': '2컵'}, {'ingredient': '대파', 'qty': '1/2대'}, {'ingredient': '통깨', 'qty': '약간'}]}, {'type': '[양념]', 'type_list': [{'ingredient': '고추장', 'qty': '2T'}, {'ingredient': '고추가루', 'qty': '1.5T'}, {'ingredient': '간장', 'qty': '2T'}, {'ingredient': '설탕', 'qty': '3T'}]}]",
                      "ingredient_zh": "",
                      "ingredient_predict": "",
                      "step_ko": "[{'step_index': '1', 'step': '먼저 종이컵 기준 물 2컵에 떡볶이떡을 넣고 센불에서 팔팔 끓여 줍니다.냉동 떡이라면 물에 잠깐 담궈두셨다가 사용하세요', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2018/08/13/7dadc471546884a68fa6baa95ea6d3621.jpg'}, {'step_index': '2', 'step': '물이 팔팔 끓으면 양념을 다 넣어준 뒤 잘 풀어주고 또 자글자글 끓여 줍니다.양념을 미리 섞어두시면 좋아요', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2018/08/13/0db57da3a7ac9ff787511ac8422334891.jpg'}, {'step_index': '3', 'step': '국물이 졸아들면 대파를 가위로 쫑쫑 썰어 넣어주시고 통깨 약간 뿌려 주시면 끝!', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2018/08/13/d47e6cb00015a8335d32afc8d6f637e01.jpg'}, {'step_index': '4', 'step': '너무 간단한데 맛있어서 놀라는 백종원 분식점 떡볶이 완성입니다!', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2018/08/13/6be419a5657af84707e57fe1f3e3cf741.jpg'}, {'step_index': '5', 'step': '한개 먹어보니 어머머!정말 분식점에서 파는 떡볶이 맛이 나면서 넘 맛있어요. 너무 간단한데 맛있어서 놀랬어요^^', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2018/08/13/fb1285c8dfc68966308a4688ed82f7b81.jpg'}]",
                      "step_zh": "",
                      "step_predict": "",
                      "use_yn": "",
                      "upload_yn": ""
                  },
                  {
                      "recipe_id": "6891816",
                      "cover_ko": "https://recipe1.ezmember.co.kr/cache/recipe/2018/07/02/760e92406112f6a0ad98d84844cbfc7e1_m.jpg",
                      "cover_zh": null,
                      "url": "https://m.10000recipe.com/recipe/6891816",
                      "category_ko": "",
                      "category_zh": "",
                      "category_predict": "",
                      "title_ko": "마지막한젓가락까지바삭하고고소한간장멸치볶음(아이밑반찬,간단반찬)멸치볶음",
                      "title_zh": "",
                      "title_predict": "",
                      "info_ko": "{'description': ' 저희집 4살 막둥이가 멸치볶음을 잘먹어요^^그래서 항상 밑반찬으로 만들어 놓아요    ', 'count': '4인분', 'time': '10분이내', 'level': '아무나'}",
                      "info_zh": "",
                      "info_predict": "",
                      "ingredient_ko": "[{'type': '[재료]', 'type_list': [{'ingredient': '잔멸치300cc', 'qty': '1국그릇'}]}, {'type': '[양념]', 'type_list': [{'ingredient': '오일', 'qty': '3스푼'}, {'ingredient': '간장', 'qty': '1스푼'}, {'ingredient': '맛술', 'qty': '1스푼'}, {'ingredient': '올리고당', 'qty': '3스푼'}, {'ingredient': '설탕티스푼', 'qty': '1스푼'}, {'ingredient': '참기름', 'qty': '1스푼'}, {'ingredient': '깨소금', 'qty': '1스푼'}]}]",
                      "ingredient_zh": "",
                      "ingredient_predict": "",
                      "step_ko": "[{'step_index': '1', 'step': '잔멸치 국그릇1이예요\\n대량으로 구매를 해서 몇 그람 정도인지 몰라서 비커에 넣어 봤어요ㅋ 300cc네요', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2018/07/02/c854336daeaf5b9e7606890250a575d81.jpg'}, {'step_index': '2', 'step': '멸치 비린내를 없애기 위해서 볶음팬에 아무것도 없이 멸치만 넣고 중간불에 볶아주세요', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2018/07/02/ab9a31d2a8b0786d28949c5e18a5c2b41.jpg'}, {'step_index': '3', 'step': '멸치가 약간 노릇노릇하게 되었을때 오일을 3T\\n넣고 볶아주세요 저는 카놀라유를 사용했어요 약간의 기포가 생길때 불을 끄고', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2018/07/02/2b11cd655b9f93f3707e834a34f869aa1.jpg'}, {'step_index': '4', 'step': '맛술1T,간장1T를 넣고 골고루 섞어주세요', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2018/07/02/de5a24cb96dbe37d35040b3ff84bc73e1.jpg'}, {'step_index': '5', 'step': '올리고당 3T와 설탕 티스푼1T 넣고 약불에서 아주 잠깐만(3초~5초) 골고루 볶아주세요(달게 드시지 않으시면 설탕은 생략하셔도 됩니다)', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2018/07/02/a667e859771c5a0417fba2617606116b1.jpg'}, {'step_index': '6', 'step': '다시 불을 끄고 참기름1', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2018/07/02/245951c2df4b3ef4b29769510c7611fa1.jpg'}, {'step_index': '7', 'step': '깨소금1T', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2018/07/02/0ee2319f06475251e1d9f946d1009cf81.jpg'}, {'step_index': '8', 'step': '골고루 섞어주면 완성입니다', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2018/07/02/16c174ab16a8f1608399293c2f171f571.jpg'}]",
                      "step_zh": "",
                      "step_predict": "",
                      "use_yn": "",
                      "upload_yn": ""
                  },
                  {
                      "recipe_id": "6912220",
                      "cover_ko": "https://recipe1.ezmember.co.kr/cache/recipe/2019/08/07/8683a91920e8857cc7aba8fd79da46a91_m.jpg",
                      "cover_zh": null,
                      "url": "https://m.10000recipe.com/recipe/6912220",
                      "category_ko": "",
                      "category_zh": "",
                      "category_predict": "",
                      "title_ko": "순두부찌개.바지락,고기없이도기가막힌순두부찌개만드는법/만들기/순두부찌개황금레시피",
                      "title_zh": "",
                      "title_predict": "",
                      "info_ko": "{'description': ' 제가 순두부찌개를 좋아해서 자주 해먹는데요. 개인적인 취향상 돼지고기 넣는것은 별로고, 바지락은 준비하려면 좀 번거롭죠. 그래서 오늘은 바지락이나 돼지고기 없이도 맛있는 순두부찌개 만드는 저의 레시피를 소개해 보겠습니다.    ', 'count': '1인분', 'time': '30분이내', 'level': '아무나'}",
                      "info_zh": "",
                      "info_predict": "",
                      "ingredient_ko": "[{'type': '[재료]', 'type_list': [{'ingredient': '순두부', 'qty': ''}, {'ingredient': '대파', 'qty': '1/4'}, {'ingredient': '양파', 'qty': '1/4'}, {'ingredient': '애호박', 'qty': '1/4'}, {'ingredient': '청양고추', 'qty': '1개'}, {'ingredient': '달걀', 'qty': '1개'}, {'ingredient': '참기름', 'qty': '1큰술'}, {'ingredient': '식용유', 'qty': '2큰술'}, {'ingredient': '고추가루', 'qty': '1+1/2큰술'}, {'ingredient': '소금', 'qty': '1/2큰술'}, {'ingredient': '설탕', 'qty': '1꼬집'}, {'ingredient': '굴소스', 'qty': '1큰술'}, {'ingredient': '간장', 'qty': '1큰술'}, {'ingredient': '다진마늘', 'qty': '1큰술'}, {'ingredient': '멸치', 'qty': '6수'}]}]",
                      "ingredient_zh": "",
                      "ingredient_predict": "",
                      "step_ko": "[{'step_index': '1', 'step': '제일 먼저 멸치 육수를 끓여주세요. 멸치외에 있으면 표고버섯 약간, 다시마 약간 넣고 끓이면 되는데 없으면 멸치만 넣고 그냥 끓여도 됩니다.\\n그 다음은 채소를 손질해야겠죠. 대파 1/4과 양파 1/4을 잘게 썰어주시고요.', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2019/05/16/f73915fc84e7b107a26321ee272b3f341.jpg'}, {'step_index': '2', 'step': '매콤한걸 좋아하시는분은 청양고추 하나 어슷하게 썰어주시고', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2019/05/16/bb4df35e1f740f4a21e3ddc64c6406491.jpg'}, {'step_index': '3', 'step': '호박 1/4은 반달 모양으로 썰어주세요.', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2019/05/16/7ae21ace8bffd2d31fed93ca6b7824e21.jpg'}, {'step_index': '4', 'step': '재료손질은 벌써 끝났네요. 다음은 준비한 뚝배기나 냄비에 참기름 1큰술,\\n식용유 2큰술을 넣어주세요.', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2019/05/16/03bd3a5f24c39d3562275c0850f3cd061.jpg'}, {'step_index': '5', 'step': '그리고 준비한 양파, 대파를 넣고 볶아주세요.', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2019/05/16/bbf9443e4b1db39fe564952e3703d35f1.jpg'}, {'step_index': '6', 'step': '그리고 고추가루 1큰술 반을 넣고 고추기름을 만들어줍니다. 매운걸 못드시는 분은 한큰술만 넣으세요.', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2019/05/16/417884b615064e79dd8f8f37f9c771151.jpg'}, {'step_index': '7', 'step': '고추기름을 만들었으면 소금 반큰술, 설탕 한꼬집을 넣어주세요. 설탕은 안넣으셔도 되긴 한데 보통 식당에서는 넣죠.', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2019/05/16/da49924b76985251a2420e08ce8f7c561.jpg'}, {'step_index': '8', 'step': '그 다음엔 굴소스 1큰술, 간장 1큰술을 넣고 저어서 섞어주세요.', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2019/05/16/418861dd4723e999bb2bf61cef1e670d1.jpg'}, {'step_index': '9', 'step': '그 다음은 멸치육수를 부어주세요. 준비된 냄비에 반 정도를 채워주세요. 너무 많이 부으면 순두부 넣을때 넘칩니다.', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2019/05/16/08a7420bac4018c2f1466e7d970afbbb1.jpg'}, {'step_index': '10', 'step': '자 이제 팔팔 끓여줍니다. 끓기 시작하면 호박과 고추를 넣고, 다진마늘도 한큰술 넣어주세요~', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2019/05/16/19af706c994589fb99a593689f6dd4671.jpg'}, {'step_index': '11', 'step': '그 다음은 순두부를 넣어줍니다.', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2019/05/16/d43d205adc4e97623856c1ccb7bf4e861.jpg'}, {'step_index': '12', 'step': '마지막으로 달걀과 파를 넣어 마무리 해줍니다.', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2019/05/16/255e5df93377dde02765b93aa0afcd2f1.jpg'}, {'step_index': '13', 'step': '제눈에는 엄청 맛있어 보이는데 어떠세요?\\n사실 순두부찌개의 맛을 좌우하는 바지락이나 돼지고기 없이 맛을 내려면 쉽지 않은데요. 제가 생각하는 포인트는 바지락이나 돼지고기가 없으면 굴소스 정도는 꼭 들어가야 하고, 멸치육수도 필요합니다. 그리고 간이 적당히 맞아야 합니다.', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2019/05/16/44e2623a6e563f5a38c6c9d5da2b99031.jpg'}]",
                      "step_zh": "",
                      "step_predict": "",
                      "use_yn": "",
                      "upload_yn": ""
                  },
                  {
                      "recipe_id": "6836180",
                      "cover_ko": "https://recipe1.ezmember.co.kr/cache/recipe/2015/10/14/434379c503e37e6964324965a79d3a101_m.jpg",
                      "cover_zh": null,
                      "url": "https://m.10000recipe.com/recipe/6836180",
                      "category_ko": "",
                      "category_zh": "",
                      "category_predict": "",
                      "title_ko": "잔치국수양념장황금레시피이렇게~",
                      "title_zh": "",
                      "title_predict": "",
                      "info_ko": "{'description': ' 따스한 육수에 호로록 말아먹은 잔치국수 황금레시피 알려드릴게요. 물론 더 맛있게 만들어주는 양념장까지요 ^^    ', 'count': '2인분', 'time': '30분이내', 'level': '초급'}",
                      "info_zh": "",
                      "info_predict": "",
                      "ingredient_ko": "[{'type': '[재료]', 'type_list': [{'ingredient': '국수', 'qty': ''}, {'ingredient': '호박', 'qty': ''}, {'ingredient': '당근', 'qty': ''}, {'ingredient': '계란', 'qty': ''}, {'ingredient': '김가루', 'qty': ''}, {'ingredient': '김치(익은것)', 'qty': ''}]}, {'type': '[육수 재료]', 'type_list': [{'ingredient': '국물용멸치', 'qty': '1줌'}, {'ingredient': '무', 'qty': ''}, {'ingredient': '대파', 'qty': ''}, {'ingredient': '양파', 'qty': '1/2개'}, {'ingredient': '다시마(5x5)', 'qty': '2장'}, {'ingredient': '국간장', 'qty': '1스푼'}, {'ingredient': '물', 'qty': '1400ml'}]}, {'type': '[양념장]', 'type_list': [{'ingredient': '간장', 'qty': '4스푼'}, {'ingredient': '고추가루', 'qty': '1스푼'}, {'ingredient': '매실액', 'qty': '1스푼'}, {'ingredient': '참기름', 'qty': '1스푼'}, {'ingredient': '깨', 'qty': '1스푼'}, {'ingredient': '다진고추', 'qty': '1스푼'}, {'ingredient': '다진대파', 'qty': '1스푼'}, {'ingredient': '다진마늘', 'qty': '1/2스푼'}]}]",
                      "ingredient_zh": "",
                      "ingredient_predict": "",
                      "step_ko": "[{'step_index': '1', 'step': '멸치 한줌과 다시마 5센티정도로 두장 , 양파 반개 , 대파 두조각 , 무우 반조각을 함께 넣어 우려줬어요. 멸치랑 다시마로만 우려내셔도 괜찮으신데요. 무우랑 대파랑 양파가 들어가면 육수맛이 더 좋아져요. 시원함도 생기구요.', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2015/10/15/efa8c114ae84b074fbce88a4ee047e471.jpg'}, {'step_index': '2', 'step': '센불에 물이 끓어오르면 다시마를 꺼내주신 다음 15분~20분간 중불로 더 끓여주세요. 그리고 국간장 1스푼넣어 간을 해주세요. 1400ml 넣었을때 딱 1스푼이 딱이더라구요.', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2015/10/15/54ce4ce5abee42a2f2c6bc741ce1a9bf1.jpg'}, {'step_index': '3', 'step': '당근과 , 호박을 채썰어 후라이팬에 살짝 볶아주세요. 전 살짝 소금간도 해줬네요.', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2015/10/15/74ed27ccd83617c5ce72a10eace3f1ad1.jpg'}, {'step_index': '4', 'step': '계란 1개를 골고루 풀어 약불로 후라이팬에서 익혀주세요. 흰자 , 노른자 따로 해주셔도 상관없으세요. 전 섞어서 길게 지단을 준비해주었어요. 취향에 맞춰 만들어주시면 되세요.', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2015/10/15/b93c3e9aa1c28a881a86d4496bbeeac21.jpg'}, {'step_index': '5', 'step': '양념장을 만들어주세요. 간장 4스푼 , 고추가루 1스푼 , 다진고추 1스푼 , 다진마늘 0.5스푼 , 다진대파 1스푼 , 매실액 1스푼 , 참기름 1스푼 , 깨 1스푼을 넣어 만들었어요요. 양념장도 사람들마다 만드는게 틀리다죠. 요렇게 들어간 것이 제 입맛에 딱 맞는 양념장 황금레시피 에요. 혹 부족한 것은 입맛에 맞춰서 조절해주시면 되시구요.', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2015/10/15/9c849016abe3264a4348ff5a14417e241.jpg'}, {'step_index': '6', 'step': '끓는 물에 국수를 삶아 주세요. 500원 동전만한 양이 1인분이라니 분량에 맞춰 주시면 되세요. 끓어오를때 넘치는데요 그럴때 찬물을 조금씩 넣어주면서 삶으시면 면이 쫄깃해져요. 넘쳐흐르지도 않고 딱 좋죠. 보통 국수봉지엔 4분 삶으라고 나와있던데요. 요렇게 찬물을 조금씩 부어주면서 삶다보면 6분정도가 딱 잘맞게 익는 것 같아요.', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2015/10/15/4053597eecc229bc0bba46edf1365bca1.jpg'}, {'step_index': '7', 'step': '삶은 국수는 찬물에 헤우거주세요. 면발이 더욱 더 쫄깃 탱탱해지도록 말이에요. 체에 받쳐 물기도 좀 빼주구요.', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2015/10/15/5042a2fcde523be5e6a5e1b16e4ea59f1.jpg'}, {'step_index': '8', 'step': '면을 제일 먼저 담고 고명을 올려준 다음 육수를 담아주시면 완성이에요.', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2015/10/15/90057ef15ca7b9cf7bfd3a7cf566143f1.jpg'}]",
                      "step_zh": "",
                      "step_predict": "",
                      "use_yn": "",
                      "upload_yn": ""
                  },
                  {
                      "recipe_id": "6883937",
                      "cover_ko": "https://recipe1.ezmember.co.kr/cache/recipe/2018/02/13/e0649f3f0b446f39c9a7bdff70d953691_m.jpg",
                      "cover_zh": null,
                      "url": "https://m.10000recipe.com/recipe/6883937",
                      "category_ko": "",
                      "category_zh": "",
                      "category_predict": "",
                      "title_ko": "닭볶음탕닭도리탕황금레시피짱짱맛칼칼함이남달라",
                      "title_zh": "",
                      "title_predict": "",
                      "info_ko": "{'description': ' 블로그 통합검색 한달동안 1위를 했던 레시피에요 고추장의 질퍽대는 맛이 싫은 분들! 식당에서 파는 것처럼 칼칼하게 진한 매콤한 맛을 내는 닭볶음탕이에요 블로그에서 폭풍칭찬을 받았던 자신있는 레시피! 칼칼하고 질퍽대지 않고 중독되는 양념장이랍니다 제가 테스트해 본 결과 고추장2와 고추가루7의 국간장 5 마늘1 설탕2 비율이 가장 적절하더라구요 텁텁한 맛 없이 매콤하고 맛있는 양념장이 된답니다<p> </p><p> </p>고추장 2큰술 고추가루 7큰술 국간장 5큰술 마늘 1큰술 설탕2큰술은 <p> </p><p> </p>※ 어디에도 없는 대박비율인데 본인이 개발한 것처럼 블로그에 포스팅하지 말아주세요<p> </p>    ', 'count': '3인분', 'time': '60분이내', 'level': '중급'}",
                      "info_zh": "",
                      "info_predict": "",
                      "ingredient_ko": "[{'type': '[재료]', 'type_list': [{'ingredient': '닭', 'qty': '1마리'}, {'ingredient': '당근', 'qty': '1/3개'}, {'ingredient': '양파', 'qty': '1/2개'}, {'ingredient': '감자', 'qty': '3개'}, {'ingredient': '대파초록색부분20센티', 'qty': '4개'}, {'ingredient': '청양고추', 'qty': '4개'}]}, {'type': '[양념장]', 'type_list': [{'ingredient': '고추장', 'qty': '2큰술'}, {'ingredient': '고추가루', 'qty': '7큰술'}, {'ingredient': '설탕', 'qty': '2큰술'}, {'ingredient': '국간장', 'qty': '5큰술'}, {'ingredient': '마늘', 'qty': '1큰술아주듬뿍'}, {'ingredient': '물', 'qty': '1소주잔'}]}]",
                      "ingredient_zh": "",
                      "ingredient_predict": "",
                      "step_ko": "[{'step_index': '1', 'step': '블로그에서 핫한 반응을 일으켰던 닭볶음탕이니 믿고 따라해주세요! \\n파와 청양고추는 어슷 썰고 당근 감자는 큼직하게 썰어주세요', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2018/10/06/19ea388e1d072324ee7b51b2607afa821.jpg'}, {'step_index': '2', 'step': '양파는 반을 자른 후 사각으로 썰어주세요', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2018/11/19/30b97284d9681e4da6eb75315c28c4331.png'}, {'step_index': '3', 'step': '고추장2큰술 고추가루7큰술 설탕2큰술 국간장5큰술 마늘1큰술 넣고 소주잔으로 물1컵 넣고 섞어 주세요\\n간장은 국간장이에요', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2018/10/06/b4b430f3081def5ec693b8158be3ed331.jpg'}, {'step_index': '4', 'step': '닭은 끓는물에 살짝 데쳐냅니다 끓기 시작하면 5분정도 데친 후 물을 버리고 찬물로 불순물을 씻어주세요', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2018/10/06/017509fc16cb5d343021c1c2852f070a1.jpg'}, {'step_index': '5', 'step': '데친 닭을 깊은 팬에 넣고 소주 1컵을 부어줍니다 닭 잡내를 잡아줍니다', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2018/10/06/b8a01fce909dee8b4ae7e503986ea7ce1.jpg'}, {'step_index': '6', 'step': '당근 감자를 넣어주고 중간에 양념장을 올린 후 물 800ml 넣어주세요 계랑컵이 없으면 재료 끄트머리 2/3 정도만 넣어주세요', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2018/10/06/3539f1995f298bd8f2fbeef85ab7b8861.jpg'}, {'step_index': '7', 'step': '강불에서 팔팔 끓어오르면 양념장을 섞고 강불과 중불 사이에서 익히세요', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2018/10/06/655fc6c2d4c85a58037b6a3525135fa41.jpg'}, {'step_index': '8', 'step': '국물이 반으로 졸았을 때 감자와 닭이 익었는지 젓가락으로 찔러 확인하세요\\n화력이 모두 다르니 물이 너무 많이 졸거나 닭,감자가 안 익었다면 물은 뜨거운 물로 추가하셔도 돼요', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2018/10/06/61ac8cfa332a87ee2becc647e0eecc591.jpg'}, {'step_index': '9', 'step': '국물이 요 정도 있는 상태에서 대파 고추 양파를 넣습니다 국물 없게 조리는 건 비추구요 국물이 있게 졸여주세요', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2018/10/06/c041672c6cc99aea3a14f74479fb3d201.jpg'}, {'step_index': '10', 'step': '대파 청양고추 양파를 넣은 후 휘리릭 섞고 1분후 불을 끕니다', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2018/10/06/d941e9767ddc73b06116ea0947892b331.jpg'}, {'step_index': '11', 'step': '국물은 요 정도로 졸이면 돼요 아주 칼칼하기 때문에 국물이 있어야 밥도 비벼 먹고 맛있답니다', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2018/10/06/126069a69143b9b2c8ec8819f0d0007b1.jpg'}, {'step_index': '12', 'step': '국물을 매콤 칼칼하게 먹을 수 있어서 맛집 식당에서 맛보는듯한 닭볶음탕 레시피 완성! 양념장이 황금 비율이랍니다\\n비율은 모두 지켜주세요 여러번 해보고 터득한 황금비율이에요^^\\n황금팁은 양념장 비율과 야채 넣고 1분 후에 불을 끄는 것이랍니다 \\n국물을 많이 있게 졸이면 매콤한 국물닭도리탕 백숙처럼 부드러운 닭고기에 국물을 얹어먹을 수 있는 스타일 (국물이 매콤 칼칼)\\n취향에 따라 졸여주세요', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2018/10/06/f30d62c0aae5668410990e2d72b5c3121.jpg'}]",
                      "step_zh": "",
                      "step_predict": "",
                      "use_yn": "",
                      "upload_yn": ""
                  },
                  {
                      "recipe_id": "6885928",
                      "cover_ko": "https://recipe1.ezmember.co.kr/cache/recipe/2018/03/22/599723cfecc8d9dd610aabadcbf6f3a71_m.jpg",
                      "cover_zh": null,
                      "url": "https://m.10000recipe.com/recipe/6885928",
                      "category_ko": "",
                      "category_zh": "",
                      "category_predict": "",
                      "title_ko": "초간단10분요리김치비빔국수양념장끝내줘요",
                      "title_zh": "",
                      "title_predict": "",
                      "info_ko": "{'description': ' 특별한 재료가 없어도 <p> </p>든든하게 한 끼를 먹을 수 있는 <p> </p>또 엄청 빨리 만들어 낼 수 있는 비빔국수!<p> </p><p> </p>면을 끓이는 5~6분 정도의 시간 동안에<p> </p>양념장을 만들어 준비하고<p> </p><p> </p>면이 익기만 하면<p> </p>찬물에 헹구어 만들어 놓은 양념장과<p> </p>참기름을 넣어 비벼 먹으면 된다<p> </p><p> </p>그래서 양념장 비율이 참 중요해~^^    ', 'count': '1인분', 'time': '10분이내', 'level': '초급'}",
                      "info_zh": "",
                      "info_predict": "",
                      "ingredient_ko": "[{'type': '[재료]', 'type_list': [{'ingredient': '국수', 'qty': '1.5인분'}, {'ingredient': '식용유', 'qty': '1큰술'}, {'ingredient': '김치', 'qty': '2/3컵'}, {'ingredient': '간장', 'qty': '1큰술'}, {'ingredient': '고추장', 'qty': '1큰술'}, {'ingredient': '고춧가루', 'qty': '1큰술'}, {'ingredient': '설탕', 'qty': '1큰술'}, {'ingredient': '올리고당', 'qty': '1/2큰술'}, {'ingredient': '식초', 'qty': '1큰술'}, {'ingredient': '참기름', 'qty': '1큰술'}, {'ingredient': '통깨', 'qty': '약간'}]}]",
                      "ingredient_zh": "",
                      "ingredient_predict": "",
                      "step_ko": "[{'step_index': '1', 'step': '국수는 1인분 분량이지만 남편이 워낙에 국수를 잘 드시니 넉넉하게 만들었다\\n사실 1인분만 만들면 분명히 모자랄 것이다', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2018/03/22/6b6c705f30969f875db1c9ca1780bebf1.jpg'}, {'step_index': '2', 'step': '어떤 분은 국수를 삶을 때\\n식용유를 한 큰 술 넣어 끓인다고 한다\\n그럼 국수를 천천히 먹어도\\n불거나 잘 퍼지지 않아서 좋다는데...\\n워낙에 잡채를 만들 때 당면을\\n그렇게 끓여주기는 하지만\\n소면은 처음이었다', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2018/03/22/9413fd772a9a0732b107d254ea9a050b1.jpg'}, {'step_index': '3', 'step': '일반 소면을 삶을 때와 같이 \\n끓는 물에 소면을 넣고 \\n식용유도 한 큰 술 넣어 끓인다\\n물이 끓어오르면 찬물을 넣고 \\n한 번 더 끓여주기\\n그리고 찬물에 헹구는데\\n소면을 찬물에 헹구는데 기름기가 있으니\\n느낌이 좀 다르다!', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2018/03/22/452c0a0977a7e94428a437d1c11fb47a1.jpg'}, {'step_index': '4', 'step': '소면에 윤기 좔좔~^^', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2018/03/22/5cd96642bc8f71a5e316cc08f3a189541.jpg'}, {'step_index': '5', 'step': '분량의 양념장을 준비하고\\n김치를 썰어서 섞어준다', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2018/03/22/935ebc15b1e6bad87e7ed6169bd409e31.jpg'}, {'step_index': '6', 'step': '국수를 삶는 동안 양념장을 만들어\\n김치와 섞어주면 김치에 양념이 배어\\n새콤달콤 맛있어진다', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2018/03/22/ff404abc0c3b6281e8d9382d58e8ecf31.jpg'}, {'step_index': '7', 'step': '식용유 한 큰 술 넣어 삶은 소면이\\n윤기가 난다~', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2018/03/22/e1f90ab17cc3670fe9539fefedd0666c1.jpg'}, {'step_index': '8', 'step': '김치 양념장을 넣고 참기름과\\n깨를 뿌려 완성~!!', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2018/03/22/510f9d4535c43ab1f09ca24f4b9609df1.jpg'}, {'step_index': '9', 'step': '남편의 호로록 국수 먹는 소리가\\n참말로 맛있게 들리고\\n맛있다고 몇 번을 이야기해 주는 소리도 참말로 듣기 좋네~', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2018/03/22/2e9b41138d99caeea2b930fecf0fe66f1.jpg'}]",
                      "step_zh": "",
                      "step_predict": "",
                      "use_yn": "",
                      "upload_yn": ""
                  },
                  {
                      "recipe_id": "6877057",
                      "cover_ko": "https://recipe1.ezmember.co.kr/cache/recipe/2017/09/25/891d12b1df5fd47caa79578a075960d81_m.jpg",
                      "cover_zh": null,
                      "url": "https://m.10000recipe.com/recipe/6877057",
                      "category_ko": "",
                      "category_zh": "",
                      "category_predict": "",
                      "title_ko": "(집에서즐기는술안주)참치김치전/김치전-간단술안주전만들기",
                      "title_zh": "",
                      "title_predict": "",
                      "info_ko": "{'description': ' 집에 먹을 건 없고 <p> </p>술안주로 간단하게 만들어 먹고 싶을 때<p> </p>역시 제일 만만한 재료는 김치입니다 :) ㅎㅎ<p> </p><p> </p>김치만 넣기 아쉬워 참치까지 넣어 <p> </p>술안주로도 좋고 간식으로도 좋은 <p> </p>참치김치전 가져왔습니다    ', 'count': '2인분', 'time': '15분이내', 'level': '아무나'}",
                      "info_zh": "",
                      "info_predict": "",
                      "ingredient_ko": "[{'type': '[주재료]', 'type_list': [{'ingredient': '신김치', 'qty': '2컵(1/4포기)'}, {'ingredient': '참치', 'qty': '1캔(200g)'}, {'ingredient': '부침가루', 'qty': '1컵'}, {'ingredient': '김치국물', 'qty': '1/2컵'}, {'ingredient': '물', 'qty': '1/2컵'}]}, {'type': '[선택 재료]', 'type_list': [{'ingredient': '청양고추', 'qty': '2개'}]}, {'type': '[계량]', 'type_list': []}]",
                      "ingredient_zh": "",
                      "ingredient_predict": "",
                      "step_ko": "[{'step_index': '1', 'step': '비 오는 날 생각나는 \\n참치김치전 만들기 ♬♪', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2017/09/25/defeac5920c5674d939ef135dc009d0d1.jpg'}, {'step_index': '2', 'step': '김치는 가위로 잘게 잘라주고', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2017/09/25/5e631834ae572e72de3027d03d74888b1.jpg'}, {'step_index': '3', 'step': '· 참치는 기름을 쫙 빼서', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2017/09/25/9d200ca3002060ae4dd79ff781d872ef1.jpg'}, {'step_index': '4', 'step': '김치와 같이 놔둡니다', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2017/09/25/64039a3d49e7070be7cd02d35867a05b1.jpg'}, {'step_index': '5', 'step': '· 김치 국물 1/2컵에', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2017/09/25/d72b27cfc6ce61935d8d2ac084fa444c1.jpg'}, {'step_index': '6', 'step': '+ 물 1/2컵을 섞어\\n총 1컵을 만들어 줍니다', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2017/09/25/67c2352f5ec45e7d13a686ba23013d051.jpg'}, {'step_index': '7', 'step': '· 부침가루 1컵과 총 물 1컵(위에 김치국물 1/2컵 + 물1/2컵 섞은 물)부침가루와 물을 1:1 비율로 준비해 주세요 ', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2017/09/25/a1c19f7cd108b370e64557600c7ec8af1.jpg'}, {'step_index': '8', 'step': '볼에 준비해 준 재료를 다 넣고- 매콤하게 드시고 싶으신 분들은 청양고추를 잘라 넣어주세용 :) ', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2017/09/25/8941e0d10c81046bf252ef176e786b1d1.jpg'}, {'step_index': '9', 'step': '· 골고루 섞어줍니다 \\n쉐킷쉐킷', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2017/09/25/db333ec4c62356afce29b25d80abdbf41.jpg'}, {'step_index': '10', 'step': '· 기름 넉넉히 두르고 \\n전을 한 국자씩 부쳐줍니다\\n전은 기름 많이 넣고 튀기듯 구워줘야 맛있는 거 알져??? 찡긋 > ', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2017/09/25/fbb233dff5254a7e85ccd73c91a001051.jpg'}, {'step_index': '11', 'step': '· 노릇노릇 맛있게 구워주면 완성', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2017/09/25/fb4dc340afb0316c3febd30f41f357451.jpg'}, {'step_index': '12', 'step': '비가 오면 생각나는 \\n국민 술안주 \\n간식으로 먹어도 맛있는\\n참치 김치전', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2017/09/25/c7351ea9ba6dd83a84b39ac526eae13e1.jpg'}]",
                      "step_zh": "",
                      "step_predict": "",
                      "use_yn": "",
                      "upload_yn": ""
                  },
                  {
                      "recipe_id": "6873683",
                      "cover_ko": "https://recipe1.ezmember.co.kr/cache/recipe/2017/07/28/860484b80033e84a3584a366ae903a0d1_m.jpg",
                      "cover_zh": null,
                      "url": "https://m.10000recipe.com/recipe/6873683",
                      "category_ko": "",
                      "category_zh": "",
                      "category_predict": "",
                      "title_ko": "엄마의레시피,소고기미역국끓이는법",
                      "title_zh": "",
                      "title_predict": "",
                      "info_ko": "{'description': \" 세상에서 가장 맛있는 미역국은 울 엄마표 #소고기미역국<p> </p>막 결혼하고 나선 그 맛이 그리워 혼자 끓여봤는데 맛이 영 아닌 거예요.<p> </p><p> </p>요리책에 의존하긴 했으나 재료 하나 빼먹지 않고 만들었건만 어딘가 10%쯤은 모자란 맛.<p> </p>결국 엄마에게 전화를 걸어 요리법을 꼬치꼬치 캐물어봤다지요.<p> </p><p> </p>그날 이후론 엄마만의 시크릿 레시피를 알게 되어 요즘은 \\\\'엄마 손맛\\\\'을 제법 흉내 내고 있어요^^<p> </p>우리 엄마의 #미역국 끓이는 법 공개해요.<p> </p>    \", 'count': '4인분', 'time': '60분이내', 'level': '초급'}",
                      "info_zh": "",
                      "info_predict": "",
                      "ingredient_ko": "[{'type': '[재료]', 'type_list': [{'ingredient': '소고기(국거리용)', 'qty': '180g'}, {'ingredient': '미역', 'qty': '1줌(20g)'}, {'ingredient': '쌀뜨물(혹은물)', 'qty': '1.4L(종이컵기준약7컵)'}, {'ingredient': '다진마늘', 'qty': '1큰술'}, {'ingredient': '참기름', 'qty': '1큰술'}, {'ingredient': '국간장', 'qty': '2큰술'}, {'ingredient': '소금', 'qty': '약간'}]}]",
                      "ingredient_zh": "",
                      "ingredient_predict": "",
                      "step_ko": "[{'step_index': '1', 'step': '키친타올을 이용해 소고기 핏물을 닦아주세요.덩어리 고기를 사용할 경우 수직 방향(고기의 결과 반대로)으로 썰어주세요.\\n결대로 썰어주면 고기가 질겨져요.', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2017/07/28/06830469a296ca1b3555d4030e1d13b21.jpg'}, {'step_index': '2', 'step': '미역은 물 500ml(약 2.5컵)에 10분간 불려주세요.미역 20g은 이 정도.\\n\\n대충 가늠할 수 있겠지요?\\n저울이 없는 분들은 사진 참고해서 양 조절해주세요.\\n', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2017/07/28/02572a32cda53119bb18f3da68978a7d1.jpg'}, {'step_index': '3', 'step': '미역은 물 500ml(약 2.5컵)에 10분간 불려주세요.혹, 양 조절에 실패했다면 불린 미역은 냉동실에 보관해뒀다가 드세요.\\n', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2017/07/28/2dc4145d74bff31ca31576aec6a4fbe61.jpg'}, {'step_index': '4', 'step': '불린 미역은 가위를 이용해 먹기 좋은 크기로 잘라주세요.', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2017/07/28/4ef4d1e6a67b78302abfcc83c7ebcd281.jpg'}, {'step_index': '5', 'step': '미역은 체를 이용해 건져주세요.\\n이때 미역 불린 물은 버리지 않고 미역국 끓일 때 물 대신 사용해주세요.엄마의 레시피..\\n미역 불린 물 혹은 쌀뜨물을 넣어 미역국을 끓이는 거예요.\\n\\n국물의 깊이가 달라진다고 해야 할까요?\\n조미료 하나 넣지 않고도 깊고 진한 맛의 미역국을 끓일 수 있어요.', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2017/07/28/5ec4e317d5cf1b9263169b4f9b676cd91.jpg'}, {'step_index': '6', 'step': '중불로 달군 냄비에 참기름 1큰술을 두른 뒤 다진마늘 1큰술과 소고기를 넣고 볶아주세요.', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2017/07/28/c006a4996b826c70935216324bbd1e801.jpg'}, {'step_index': '7', 'step': '소고기 겉면이 절반 정도 익을 때쯤 국간장 1큰술을 넣어 볶아주세요.', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2017/07/28/a3237fd623ae64bcb120b4c791b6f8071.jpg'}, {'step_index': '8', 'step': '미역을 넣고 푸른색을 띨 때까지 달달 볶아주세요.', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2017/07/28/f2694424876b6c385e185a029915cbd41.jpg'}, {'step_index': '9', 'step': '쌀뜨물 혹은 미역 불린 물 400mL(약 2컵)를 붓고 강불로 올려주세요.', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2017/07/28/5ce798a7a4eff1aacd47a89f61968d2a1.jpg'}, {'step_index': '10', 'step': '국물이 끓기 시작하면 물 1L(약 5컵)를 넣어주세요.\\n다시 끓어오르면 중약불로 줄인 뒤 15분간 끓여주세요.', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2017/07/28/b0c500a99875447b4c29bfd6b49809771.jpg'}, {'step_index': '11', 'step': '국간장 1큰술을 넣고 부족한 간은 소금으로 더해주세요.\\n엄마 손맛 가득한 미역국 완성입니다.', 'step_image': 'https://recipe1.ezmember.co.kr/cache/recipe/2017/07/28/0c930335b86089f527169de6628d4a711.jpg'}]",
                      "step_zh": "",
                      "step_predict": "",
                      "use_yn": "",
                      "upload_yn": ""
                  }
              ]
          }
        }
      // tempFoodItem:{
      //   food_title:'닭볶음탕진짜진짜황금레시피알려드려요~~^^',
      //   food_img_url:'https://recipe1.ezmember.co.kr/cache/recipe/2018/02/27/b5806f01ccb6f6d5d9aa94bdd6f4287e1_m.jpg',
      //   food_author:'주부9단요리톡톡',
      //   food_author_head:'https://recipe1.ezmember.co.kr/cache/recipe/2018/02/27/b5806f01ccb6f6d5d9aa94bdd6f4287e1_m.jpg'
      // }
    }
  },
  components: {
    Homecell
  },
  created() {
    this.fetchData();
  },
  mounted() {
    // console.log('what the fuck' + this.mockData);
  },
  methods: {
    fetchData() {
      this.pageData.isLoading = true;
      let url = "api/recipe/";
      let params = {
        // page:'1'
      };
      // network.get(url, params).then((res) => {
      //   this.pageData.isLoading = false;
      //   this.pageData.content = res.data;
      // }).catch((err) => {
      //   this.pageData.isLoading = false;
      //   console.log("error : ", err);
      // });
      // this.pageData.content = mockHomeData.results;
    },
    onLoad() {
      console.log("load more");
    }
  },
}
</script>

<style>

</style>