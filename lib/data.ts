import { Talent } from './types';

export const REGIONS = ['キベラ', 'ダラヴィ', 'ホシーニャ', 'カエリチャ', 'シテ・ソレイユ'];
export const SKILL_CATEGORIES = ['AIオーケストレーション', 'プロンプトエンジニアリング', 'ノーコード/ローコード', '自動化・効率化', 'データ戦略', 'プロダクトリーダーシップ'];

export const TALENTS: Talent[] = [
    {
        id: '1',
        name: 'アマネ O.',
        age: 19,
        region: 'キベラ',
        potential: 94,
        skills: [{ category: 'AIオーケストレーション', level: 5 }, { category: 'プロンプトエンジニアリング', level: 4 }],
        tags: ['LangChain', 'AutoGPT', 'モバイルファースト'],
        lastAchievement: 'LLMエージェントを活用し、地元市場のサプライチェーンを自動化',
        avatarInitial: 'A'
    },
    {
        id: '2',
        name: 'ラヴィ K.',
        age: 21,
        region: 'ダラヴィ',
        potential: 88,
        skills: [{ category: 'ノーコード/ローコード', level: 5 }, { category: 'プロダクトリーダーシップ', level: 3 }],
        tags: ['Bubble', 'Zapier', 'プロセス設計'],
        lastAchievement: 'コードを書かずにコミュニティ衛生マップを構築・運用',
        avatarInitial: 'R'
    },
    {
        id: '3',
        name: 'ソフィア L.',
        age: 20,
        region: 'ホシーニャ',
        potential: 92,
        skills: [{ category: 'データ戦略', level: 5 }, { category: '自動化・効率化', level: 4 }],
        tags: ['HuggingFace', 'Fine-tuning', '自然言語処理'],
        lastAchievement: '個別指導AIを活用し、教育プラットフォームを5000人に拡大',
        avatarInitial: 'S'
    },
    {
        id: '4',
        name: 'クワメ M.',
        age: 18,
        region: 'カエリチャ',
        potential: 97,
        skills: [{ category: 'AIオーケストレーション', level: 4 }, { category: '自動化・効率化', level: 5 }],
        tags: ['Rust', 'ローカルLLM', 'エッジコンピューティング'],
        lastAchievement: '旧型スマホで動作するオフラインAI診断ツールを展開',
        avatarInitial: 'K'
    },
    {
        id: '5',
        name: 'ジャン P.',
        age: 22,
        region: 'シテ・ソレイユ',
        potential: 85,
        skills: [{ category: 'プロンプトエンジニアリング', level: 5 }],
        tags: ['Midjourney', 'クリエイティブ', 'ストーリーテリング'],
        lastAchievement: 'NGOキャンペーンの全ビジュアルIDを生成AIで制作',
        avatarInitial: 'J'
    },
    {
        id: '6',
        name: 'プリヤ S.',
        age: 23,
        region: 'ダラヴィ',
        potential: 90,
        skills: [{ category: 'データ戦略', level: 4 }, { category: 'AIオーケストレーション', level: 4 }],
        tags: ['RAG', 'Vector DB', 'リサイクル予測'],
        lastAchievement: 'RAGを用いて廃棄物管理の予測モデルを構築',
        avatarInitial: 'P'
    },
    {
        id: '7',
        name: 'マテオ R.',
        age: 19,
        region: 'ホシーニャ',
        potential: 82,
        skills: [{ category: 'ノーコード/ローコード', level: 4 }],
        tags: ['FlutterFlow', 'Firebase', '高速MVP開発'],
        avatarInitial: 'M'
    },
    {
        id: '8',
        name: 'ニア T.',
        age: 20,
        region: 'キベラ',
        potential: 95,
        skills: [{ category: 'プロダクトリーダーシップ', level: 5 }, { category: 'プロンプトエンジニアリング', level: 4 }],
        tags: ['ビジョン設計', 'ユーザー共感', 'AI倫理'],
        lastAchievement: '地域AIハッカソンでリーダーとして優勝',
        avatarInitial: 'N'
    },
    {
        id: '9',
        name: 'リウス D.',
        age: 24,
        region: 'シテ・ソレイユ',
        potential: 78,
        skills: [{ category: '自動化・効率化', level: 4 }],
        tags: ['Make.com', 'n8n', 'ワークフロー構築'],
        avatarInitial: 'L'
    },
    {
        id: '10',
        name: 'ゾラ B.',
        age: 21,
        region: 'カエリチャ',
        potential: 89,
        skills: [{ category: 'プロンプトエンジニアリング', level: 5 }],
        tags: ['コピーライティング', 'SEO', 'マルチモーダル'],
        lastAchievement: '50以上の地元企業のコンテンツ制作を自動化',
        avatarInitial: 'Z'
    },
    {
        id: '11',
        name: 'ケンジ O.',
        age: 22,
        region: 'キベラ',
        potential: 86,
        skills: [{ category: 'AIオーケストレーション', level: 3 }, { category: '自動化・効率化', level: 4 }],
        tags: ['IoT', 'エッジAI', 'ハードウェア修理'],
        avatarInitial: 'K'
    },
    {
        id: '12',
        name: 'イザベラ C.',
        age: 20,
        region: 'ホシーニャ',
        potential: 91,
        skills: [{ category: 'データ戦略', level: 3 }, { category: 'プロダクトリーダーシップ', level: 4 }],
        tags: ['分析', 'トレンド予測', 'ソーシャルAI'],
        avatarInitial: 'I'
    },
    {
        id: '13',
        name: 'アルジュン V.',
        age: 25,
        region: 'ダラヴィ',
        potential: 84,
        skills: [{ category: 'ノーコード/ローコード', level: 5 }],
        tags: ['Webflow', 'Airtable', '顧客管理'],
        avatarInitial: 'A'
    },
    {
        id: '14',
        name: 'タボ M.',
        age: 19,
        region: 'カエリチャ',
        potential: 93,
        skills: [{ category: 'プロダクトリーダーシップ', level: 4 }, { category: 'AIオーケストレーション', level: 3 }],
        tags: ['プロトタイピング', 'システム思考', '天才肌'],
        avatarInitial: 'T'
    },
    {
        id: '15',
        name: 'マリー J.',
        age: 21,
        region: 'シテ・ソレイユ',
        potential: 80,
        skills: [{ category: '自動化・効率化', level: 5 }],
        tags: ['物流管理', 'スケジュール調整', '信頼性'],
        avatarInitial: 'M'
    },
    {
        id: '16',
        name: 'オルワセウン A.',
        age: 23,
        region: 'キベラ',
        potential: 96,
        skills: [{ category: 'AIオーケストレーション', level: 5 }, { category: 'データ戦略', level: 4 }],
        tags: ['分散AI', '連合学習', 'Python'],
        lastAchievement: 'AIセーフティツールのOSS主要コントリビューター',
        avatarInitial: 'O'
    },
    {
        id: '17',
        name: 'カミラ P.',
        age: 18,
        region: 'ホシーニャ',
        potential: 87,
        skills: [{ category: 'プロンプトエンジニアリング', level: 3 }],
        tags: ['生成アート', 'Stable Diffusion', 'UIデザイン'],
        avatarInitial: 'C'
    },
    {
        id: '18',
        name: 'デヴ P.',
        age: 22,
        region: 'ダラヴィ',
        potential: 79,
        skills: [{ category: '自動化・効率化', level: 3 }],
        tags: ['スクリプト', 'チャットボット', 'サポート'],
        avatarInitial: 'D'
    },
    {
        id: '19',
        name: 'シヤ X.',
        age: 20,
        region: 'カエリチャ',
        potential: 98,
        skills: [{ category: 'AIオーケストレーション', level: 5 }, { category: 'プロダクトリーダーシップ', level: 5 }],
        tags: ['フルスタック', 'Next.js', 'AIネイティブ'],
        lastAchievement: '200校で利用されるAI学習プラットフォームを開発',
        avatarInitial: 'S'
    },
    {
        id: '20',
        name: 'ファビエンヌ L.',
        age: 24,
        region: 'シテ・ソレイユ',
        potential: 83,
        skills: [{ category: 'ノーコード/ローコード', level: 4 }, { category: 'プロンプトエンジニアリング', level: 2 }],
        tags: ['プロジェクト管理', 'Notion', '組織化'],
        avatarInitial: 'F'
    }
];
