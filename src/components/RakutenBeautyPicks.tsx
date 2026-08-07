// 楽天アフィリエイト「おすすめ美容アイテム」ウィジェット（2026-08-08新設）
// A8/もしも/VC/ATに次ぐ5つ目の収益源。既存の他ASPセクションのコードには一切触れないこと。
// 商品データは threads_auto/site/new_site_products.json の "beauty" キーを移植（アフィリエイトID: 55a43f8e.d3c105e6.55a43f8f.a9af72fc）

import Image from "next/image";

/** 商品カード1件分のデータ型 */
type RakutenProduct = {
  /** 商品名（楽天の元データ。長い・セール文言入りのため表示側でtruncateする） */
  name: string;
  /** 商品画像URL（楽天CDN） */
  img: string;
  /** 楽天アフィリエイトのトラッキングリンク */
  link: string;
};

/** セクションのProps型（現状は追加クラスのみ受け付ける） */
type RakutenBeautyPicksProps = {
  className?: string;
};

const products: RakutenProduct[] = [
  {
    name: "＜今なら19,800円相当！＞ラヴィットで紹介【イベント開催中】ELEKI LIFT【公式】美顔器 リフトアップ ブライト エレキリフト / Brighte",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/brighte-onlineshop/cabinet/10566429/10575588/10661392/brt-fl170_260804.jpg?_ex=300x300",
    link: "https://hb.afl.rakuten.co.jp/hgc/55a43f8e.d3c105e6.55a43f8f.a9af72fc/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fbrighte-onlineshop%2Fbrt-fl170%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fbrighte-onlineshop%2Fbrt-fl170%2F&link_type=picttext",
  },
  {
    name: "【神トク】W割引で最大69％OFF シートマスク パック フェイスマスク 30枚 大容量",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/suisosum-shop/cabinet/h_/facesheetmask/11150273/facesheet_sa_48.jpg?_ex=300x300",
    link: "https://hb.afl.rakuten.co.jp/hgc/55a43f8e.d3c105e6.55a43f8f.a9af72fc/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsuisosum-shop%2Fh_and_facemask%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fsuisosum-shop%2Fh_and_facemask%2F&link_type=picttext",
  },
  {
    name: "【楽天ランキング1位受賞】脇汗 ワキガ クリーム SARAFINE サラフィネ",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/fromcocoro/cabinet/items/07962069/syouhinngazou/imgrc0104814382.jpg?_ex=300x300",
    link: "https://hb.afl.rakuten.co.jp/hgc/55a43f8e.d3c105e6.55a43f8f.a9af72fc/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ffromcocoro%2Fsarafine_n%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Ffromcocoro%2Fsarafine_n%2F&link_type=picttext",
  },
  {
    name: "【ROOMコラボ】「オギャ子 × H&」楽天限定4点セット シートマスク トーンアップ",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/suisosum-shop/cabinet/ognatuset/13656046/ognatuset_sa_01b.jpg?_ex=300x300",
    link: "https://hb.afl.rakuten.co.jp/hgc/55a43f8e.d3c105e6.55a43f8f.a9af72fc/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fsuisosum-shop%2Fh_and_set_ogyako%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fsuisosum-shop%2Fh_and_set_ogyako%2F&link_type=picttext",
  },
  {
    name: "ファンデーション カバー力 崩れにくい パウダー【D-クリア ファンデーション 12g】",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/d-ray/cabinet/09802265/13659097/imgrc0111998735.jpg?_ex=300x300",
    link: "https://hb.afl.rakuten.co.jp/hgc/55a43f8e.d3c105e6.55a43f8f.a9af72fc/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fd-ray%2Fpakuto1%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fd-ray%2Fpakuto1%2F&link_type=picttext",
  },
  {
    name: "【公式】楽天限定 オルナオーガニック シャンプー＆トリートメント",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/tsurunishi/cabinet/salesamune/event/20260804m/smooth-5-40.jpg?_ex=300x300",
    link: "https://hb.afl.rakuten.co.jp/hgc/55a43f8e.d3c105e6.55a43f8f.a9af72fc/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ftsurunishi%2Fmanual-905b073w1637l-90xb0784873%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Ftsurunishi%2Fmanual-905b073w1637l-90xb0784873%2F&link_type=picttext",
  },
  {
    name: "【公式】Yunth 生ビタミンC 美白美容液 1ml×28包 導入美容液 先行美容液",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/yunth/cabinet/11294195/11294196/event/10000000_260804.jpg?_ex=300x300",
    link: "https://hb.afl.rakuten.co.jp/hgc/55a43f8e.d3c105e6.55a43f8f.a9af72fc/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fyunth%2F10000000%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fyunth%2F10000000%2F&link_type=picttext",
  },
  {
    name: "レーザー&EMSリフトブラシPRO2.0 LLLT FDA認証 頭皮マッサージ 首 電気ブラシ",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/kirala-ec/cabinet/item/ksbblp2/imgrc0150045591.jpg?_ex=300x300",
    link: "https://hb.afl.rakuten.co.jp/hgc/55a43f8e.d3c105e6.55a43f8f.a9af72fc/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkirala-ec%2Fksbblp%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fkirala-ec%2Fksbblp%2F&link_type=picttext",
  },
  {
    name: "【公式】オルナオーガニック【楽天ランキング1位】泥 洗顔",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/tsurunishi/cabinet/salesamune/event/20260804m/905b01n0bsytw-30.jpg?_ex=300x300",
    link: "https://hb.afl.rakuten.co.jp/hgc/55a43f8e.d3c105e6.55a43f8f.a9af72fc/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ftsurunishi%2F905b01n0bsytw%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Ftsurunishi%2F905b01n0bsytw%2F&link_type=picttext",
  },
  {
    name: "【総合ランキング1位】VELUS ハイドロキノン ハイドロキノンクリーム 純ハイドロキノン5%",
    img: "https://thumbnail.image.rakuten.co.jp/@0_mall/velus/cabinet/cart-yoko/official-rank/hydroquinone-thum2.jpg?_ex=300x300",
    link: "https://hb.afl.rakuten.co.jp/hgc/55a43f8e.d3c105e6.55a43f8f.a9af72fc/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fvelus%2Fhq-white-syokai-ss%2F&m=https%3A%2F%2Fitem.rakuten.co.jp%2Fvelus%2Fhq-white-syokai-ss%2F&link_type=picttext",
  },
];

export default function RakutenBeautyPicks({ className = "" }: RakutenBeautyPicksProps) {
  return (
    <section className={`py-14 bg-gradient-to-b from-red-50/50 to-white ${className}`}>
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-8">
          <span className="inline-block text-xs font-bold text-red-600 uppercase tracking-widest bg-red-50 px-4 py-1.5 rounded-full mb-3 border border-red-100">
            [PR] 楽天市場の商品を紹介しています
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">
            楽天market｜今週のおすすめ美容アイテム
          </h2>
          <p className="text-gray-700 text-sm">
            美顔器・スキンケア・コスメを楽天市場の人気ランキングから厳選
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <a
              key={product.link}
              href={product.link}
              target="_blank"
              rel="noopener noreferrer nofollow sponsored"
              className="group flex flex-col rounded-2xl border border-red-100 bg-white overflow-hidden hover:shadow-lg hover:border-red-200 hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="relative w-full aspect-square bg-gray-50 overflow-hidden">
                <Image
                  src={product.img}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 46vw, (max-width: 1024px) 30vw, 22vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col flex-1 p-3">
                <p className="text-xs sm:text-sm font-bold text-gray-900 leading-snug line-clamp-2 flex-1">
                  {product.name}
                </p>
                <span className="inline-flex items-center justify-center w-full min-h-[40px] text-xs font-bold mt-3 py-2 px-3 rounded-xl bg-red-50 text-red-600 border border-red-100 group-hover:bg-red-100 transition-colors">
                  楽天市場で見る »
                </span>
              </div>
            </a>
          ))}
        </div>
        <p className="text-center text-xs text-gray-600 mt-6">
          ※ 本セクションは広告（楽天アフィリエイト）を含みます。価格・在庫は変動するためリンク先の最新情報をご確認ください
        </p>
      </div>
    </section>
  );
}
