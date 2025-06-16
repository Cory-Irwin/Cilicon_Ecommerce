import React from 'react'
type latestArticleComponentProp = {
  articleImage: string;
  articleTitle: string;
   calenderDay: number;
  calenderMonth: string;
  calenderYear: number;
  
};

const latestarticlecomponent = (props: latestArticleComponentProp) => {
  return (
      <div className="border-2 border-gray-200 p-4">
                <h2 className="text-lg font-bold mb-2">Latest Articles</h2>
                {[1, 2, 3].map((_, i) => (
                  <div className="flex gap-3 mb-3" key={i}>
                    <div className="h-16 w-16 bg-gray-200"><img src={props.articleImage} alt="" /></div>
                    <div>
                      <h3 className="text-sm font-semibold">
                        {props.articleTitle}
                      </h3>
                      <p className="text-xs text-gray-500">{props.calenderDay} {props.calenderMonth},{props.calenderYear}</p>
                    </div>
                  </div>
                ))}
              </div>
  )
}

export default latestarticlecomponent